import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Article } from '../types';
import { formatPublishedDate, truncateText } from '../utils/dateUtils';
import { COLORS } from '../constants';

interface NewsCardProps {
  article: Article;
  onPress: (article: Article) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onPress }) => {
  const isDark = useColorScheme() === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.surface, shadowColor: COLORS.cardShadow }]}
      onPress={() => onPress(article)}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={article.title}
    >
      {article.urlToImage ? (
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel="Article image"
        />
      ) : (
        <View style={[styles.imagePlaceholder, { backgroundColor: colors.placeholder }]}>
          <Text style={styles.imagePlaceholderText}>📰</Text>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={[styles.source, { color: COLORS.primary }]} numberOfLines={1}>
            {article.source.name}
          </Text>
          <Text style={[styles.time, { color: colors.textSecondary }]}>
            {formatPublishedDate(article.publishedAt)}
          </Text>
        </View>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={3}>
          {article.title}
        </Text>
        {article.description ? (
          <Text style={[styles.description, { color: colors.textSecondary }]} numberOfLines={2}>
            {truncateText(article.description, 120)}
          </Text>
        ) : null}
        {article.author ? (
          <Text style={[styles.author, { color: colors.textSecondary }]} numberOfLines={1}>
            By {article.author}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const lightColors = {
  surface: COLORS.surface,
  text: COLORS.text,
  textSecondary: COLORS.textSecondary,
  placeholder: COLORS.border,
};

const darkColors = {
  surface: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#B0B0B0',
  placeholder: '#333333',
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    fontSize: 40,
  },
  content: {
    padding: 12,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  source: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  time: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
  },
  author: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default NewsCard;
