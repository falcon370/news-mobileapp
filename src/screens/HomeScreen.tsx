import React, { useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  useColorScheme,
  RefreshControl,
  ListRenderItem,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Article, Category, RootStackParamList } from '../types';
import { useNews } from '../hooks/useNews';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { COLORS } from '../constants';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#121212' : COLORS.background;
  const textColor = isDark ? '#FFFFFF' : COLORS.text;

  const {
    articles,
    loading,
    refreshing,
    error,
    searchQuery,
    selectedCategory,
    loadArticles,
    refresh,
    handleSearch,
    setSearchQuery,
    setSelectedCategory,
  } = useNews();

  useEffect(() => {
    loadArticles('general');
  }, []);

  const handleCategoryChange = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      setSearchQuery('');
      loadArticles(category);
    },
    [setSelectedCategory, setSearchQuery, loadArticles],
  );

  const handleArticlePress = useCallback(
    (article: Article) => {
      navigation.navigate('ArticleDetail', { article });
    },
    [navigation],
  );

  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => <NewsCard article={item} onPress={handleArticlePress} />,
    [handleArticlePress],
  );

  const keyExtractor = useCallback((item: Article) => item.id, []);

  const renderEmpty = () => {
    if (loading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: textColor }]}>
          {error ?? 'No articles found.'}
        </Text>
      </View>
    );
  };

  const renderHeader = () => (
    <View>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmit={handleSearch}
      />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {loading && articles.length === 0 ? (
        <View style={styles.loadingContainer}>
          {renderHeader()}
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.loader}
            accessibilityLabel="Loading articles"
          />
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              tintColor={COLORS.primary}
              colors={[COLORS.primary]}
            />
          }
          showsVerticalScrollIndicator={false}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
  },
  loader: {
    marginTop: 60,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default HomeScreen;
