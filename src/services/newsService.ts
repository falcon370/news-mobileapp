import { Article, Category, NewsApiArticle, NewsApiResponse } from '../types';
import { MOCK_ARTICLES } from '../constants/mockData';

const NEWS_API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY ?? '';
const BASE_URL = 'https://newsapi.org/v2';

const normalizeArticle = (article: NewsApiArticle, index: number, category?: string): Article => ({
  id: `${article.url}-${index}`,
  title: article.title ?? '',
  description: article.description,
  content: article.content,
  url: article.url,
  urlToImage: article.urlToImage,
  author: article.author,
  publishedAt: article.publishedAt,
  source: article.source,
  category,
});

const fetchFromApi = async (endpoint: string): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/${endpoint}&apiKey=${NEWS_API_KEY}`);
  if (!response.ok) {
    throw new Error(`News API error: ${response.status}`);
  }
  const data: NewsApiResponse = await response.json();
  if (data.status !== 'ok') {
    throw new Error('News API returned non-ok status');
  }
  return data.articles
    .filter((a) => a.title && a.title !== '[Removed]')
    .map((a, i) => normalizeArticle(a, i));
};

export const fetchTopHeadlines = async (
  category: Category = 'general',
  country = 'us',
): Promise<Article[]> => {
  if (!NEWS_API_KEY) {
    return MOCK_ARTICLES.filter((a) => category === 'general' || a.category === category);
  }
  try {
    return await fetchFromApi(
      `top-headlines?country=${country}&category=${category}`,
    );
  } catch {
    return MOCK_ARTICLES.filter((a) => category === 'general' || a.category === category);
  }
};

export const searchArticles = async (query: string): Promise<Article[]> => {
  if (!query.trim()) return [];
  if (!NEWS_API_KEY) {
    const q = query.toLowerCase();
    return MOCK_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.description ?? '').toLowerCase().includes(q),
    );
  }
  try {
    return await fetchFromApi(
      `everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en`,
    );
  } catch {
    const q = query.toLowerCase();
    return MOCK_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.description ?? '').toLowerCase().includes(q),
    );
  }
};
