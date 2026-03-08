import { Category } from '../types';

export const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'Top News', value: 'general' },
  { label: 'Business', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'Sports', value: 'sports' },
  { label: 'Health', value: 'health' },
  { label: 'Science', value: 'science' },
  { label: 'Entertainment', value: 'entertainment' },
];

export const COLORS = {
  primary: '#1A73E8',
  primaryDark: '#0D47A1',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  border: '#E0E0E0',
  error: '#D32F2F',
  success: '#388E3C',
  categoryChip: '#E8F0FE',
  categoryChipActive: '#1A73E8',
  categoryChipText: '#1A73E8',
  categoryChipTextActive: '#FFFFFF',
  placeholder: '#BDBDBD',
  cardShadow: '#000000',
};
