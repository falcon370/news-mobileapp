import { useState, useCallback } from 'react';
import { Article, Category } from '../types';
import { fetchTopHeadlines, searchArticles } from '../services/newsService';

interface UseNewsReturn {
  articles: Article[];
  loading: boolean;
  refreshing: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: Category;
  isSearching: boolean;
  loadArticles: (category?: Category) => Promise<void>;
  refresh: () => Promise<void>;
  handleSearch: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: Category) => void;
}

export const useNews = (): UseNewsReturn => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('general');
  const [isSearching, setIsSearching] = useState(false);

  const loadArticles = useCallback(async (category: Category = selectedCategory) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTopHeadlines(category);
      setArticles(data);
    } catch (err) {
      setError('Failed to load articles. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    setError(null);
    try {
      const data = searchQuery
        ? await searchArticles(searchQuery)
        : await fetchTopHeadlines(selectedCategory);
      setArticles(data);
    } catch (err) {
      setError('Failed to refresh. Please try again.');
    } finally {
      setRefreshing(false);
    }
  }, [selectedCategory, searchQuery]);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) {
      setIsSearching(false);
      await loadArticles(selectedCategory);
      return;
    }
    setIsSearching(true);
    setLoading(true);
    setError(null);
    try {
      const data = await searchArticles(searchQuery);
      setArticles(data);
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, loadArticles]);

  return {
    articles,
    loading,
    refreshing,
    error,
    searchQuery,
    selectedCategory,
    isSearching,
    loadArticles,
    refresh,
    handleSearch,
    setSearchQuery,
    setSelectedCategory,
  };
};
