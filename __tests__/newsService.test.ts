import { MOCK_ARTICLES } from '../src/constants/mockData';
import { fetchTopHeadlines, searchArticles } from '../src/services/newsService';

// Mock the global fetch (no API key, so it won't be called)
global.fetch = jest.fn();

describe('newsService with mock data (no API key)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Ensure no API key is set so mock data is used
    delete process.env.EXPO_PUBLIC_NEWS_API_KEY;
  });

  describe('fetchTopHeadlines', () => {
    it('returns mock articles for general category', async () => {
      const articles = await fetchTopHeadlines('general');
      expect(Array.isArray(articles)).toBe(true);
      expect(articles.length).toBeGreaterThan(0);
    });

    it('filters mock articles by category', async () => {
      const techArticles = await fetchTopHeadlines('technology');
      techArticles.forEach((article) => {
        expect(article.category).toBe('technology');
      });
    });

    it('returns all mock articles for general category', async () => {
      const articles = await fetchTopHeadlines('general');
      // general returns all (since filter passes all when category is 'general')
      expect(articles.length).toBe(MOCK_ARTICLES.length);
    });

    it('returns articles with required fields', async () => {
      const articles = await fetchTopHeadlines('general');
      articles.forEach((article) => {
        expect(article).toHaveProperty('id');
        expect(article).toHaveProperty('title');
        expect(article).toHaveProperty('publishedAt');
        expect(article).toHaveProperty('source');
        expect(article.source).toHaveProperty('name');
      });
    });
  });

  describe('searchArticles', () => {
    it('returns empty array for empty query', async () => {
      const results = await searchArticles('');
      expect(results).toEqual([]);
    });

    it('returns empty array for whitespace-only query', async () => {
      const results = await searchArticles('   ');
      expect(results).toEqual([]);
    });

    it('finds articles matching title query', async () => {
      const results = await searchArticles('AI');
      expect(results.length).toBeGreaterThan(0);
      results.forEach((article) => {
        const matchesTitle = article.title.toLowerCase().includes('ai');
        const matchesDescription = (article.description ?? '').toLowerCase().includes('ai');
        expect(matchesTitle || matchesDescription).toBe(true);
      });
    });

    it('returns empty array when no results match', async () => {
      const results = await searchArticles('zzz_no_match_xyz_999');
      expect(results).toEqual([]);
    });

    it('performs case-insensitive search', async () => {
      const lower = await searchArticles('ai');
      const upper = await searchArticles('AI');
      expect(lower.length).toBe(upper.length);
    });
  });
});
