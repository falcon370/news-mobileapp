import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
  useColorScheme,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { formatPublishedDate } from '../utils/dateUtils';
import { COLORS } from '../constants';

type ArticleDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ArticleDetail'
>;
type ArticleDetailRouteProp = RouteProp<RootStackParamList, 'ArticleDetail'>;

interface ArticleDetailScreenProps {
  navigation: ArticleDetailNavigationProp;
  route: ArticleDetailRouteProp;
}

const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({ route }) => {
  const { article } = route.params;
  const isDark = useColorScheme() === 'dark';
  const colors = isDark ? darkColors : lightColors;

  const handleOpenUrl = async () => {
    try {
      const supported = await Linking.canOpenURL(article.url);
      if (supported) {
        await Linking.openURL(article.url);
      } else {
        Alert.alert('Error', 'Cannot open this URL.');
      }
    } catch {
      Alert.alert('Error', 'Failed to open the article URL.');
    }
  };

  const displayContent = article.content
    ? article.content.replace(/\[\+\d+ chars\]$/, '').trim()
    : article.description;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {article.urlToImage ? (
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.heroImage}
          resizeMode="cover"
          accessibilityLabel="Article hero image"
        />
      ) : null}

      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={[styles.sourceName, { color: COLORS.primary }]}>
            {article.source.name}
          </Text>
          {article.category ? (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{article.category}</Text>
            </View>
          ) : null}
        </View>

        <Text style={[styles.title, { color: colors.text }]}>{article.title}</Text>

        <View style={styles.authorRow}>
          {article.author ? (
            <Text style={[styles.author, { color: colors.textSecondary }]}>
              By {article.author}
            </Text>
          ) : null}
          <Text style={[styles.date, { color: colors.textSecondary }]}>
            {formatPublishedDate(article.publishedAt)}
          </Text>
        </View>

        {article.description ? (
          <Text style={[styles.description, { color: colors.text }]}>
            {article.description}
          </Text>
        ) : null}

        {displayContent ? (
          <Text style={[styles.content, { color: colors.textBody }]}>
            {displayContent}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={handleOpenUrl}
          activeOpacity={0.8}
          accessibilityRole="link"
          accessibilityLabel="Read full article"
        >
          <Text style={styles.readMoreText}>Read Full Article</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const lightColors = {
  background: COLORS.background,
  text: COLORS.text,
  textBody: '#424242',
  textSecondary: COLORS.textSecondary,
};

const darkColors = {
  background: '#121212',
  text: '#FFFFFF',
  textBody: '#E0E0E0',
  textSecondary: '#B0B0B0',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 250,
  },
  body: {
    padding: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sourceName: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  categoryBadge: {
    backgroundColor: COLORS.categoryChip,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  categoryText: {
    color: COLORS.categoryChipText,
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 12,
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  author: {
    fontSize: 13,
    fontStyle: 'italic',
    flex: 1,
    marginRight: 8,
  },
  date: {
    fontSize: 12,
  },
  description: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 26,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 24,
  },
  readMoreButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  readMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ArticleDetailScreen;
