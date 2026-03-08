import { formatPublishedDate, truncateText } from '../src/utils/dateUtils';

describe('formatPublishedDate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-01-15T12:00:00Z'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns "Just now" for dates less than 2 minutes ago', () => {
    const date = new Date('2024-01-15T11:59:30Z').toISOString();
    expect(formatPublishedDate(date)).toBe('Just now');
  });

  it('returns minutes ago for recent articles', () => {
    const date = new Date('2024-01-15T11:45:00Z').toISOString();
    expect(formatPublishedDate(date)).toBe('15m ago');
  });

  it('returns hours ago for articles from today', () => {
    const date = new Date('2024-01-15T09:00:00Z').toISOString();
    expect(formatPublishedDate(date)).toBe('3h ago');
  });

  it('returns days ago for articles from this week', () => {
    const date = new Date('2024-01-13T12:00:00Z').toISOString();
    expect(formatPublishedDate(date)).toBe('2d ago');
  });

  it('returns formatted date for older articles', () => {
    const date = new Date('2024-01-01T12:00:00Z').toISOString();
    const result = formatPublishedDate(date);
    expect(result).toContain('Jan');
    expect(result).toContain('1');
    expect(result).toContain('2024');
  });
});

describe('truncateText', () => {
  it('returns the original text when it is within the limit', () => {
    expect(truncateText('Hello world', 20)).toBe('Hello world');
  });

  it('truncates text and appends ellipsis when over limit', () => {
    const text = 'This is a long description that needs truncation';
    const result = truncateText(text, 20);
    expect(result.length).toBeLessThanOrEqual(21); // 20 chars + ellipsis
    expect(result).toMatch(/…$/);
  });

  it('handles exact length correctly', () => {
    const text = 'Hello world';
    expect(truncateText(text, text.length)).toBe(text);
  });
});
