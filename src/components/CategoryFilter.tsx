import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Category } from '../types';
import { CATEGORIES, COLORS } from '../constants';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
      accessibilityRole="tablist"
    >
      {CATEGORIES.map((cat) => {
        const isActive = cat.value === selectedCategory;
        return (
          <TouchableOpacity
            key={cat.value}
            onPress={() => onSelectCategory(cat.value)}
            style={[
              styles.chip,
              isActive
                ? styles.chipActive
                : {
                    backgroundColor: isDark ? '#2A2A2A' : COLORS.categoryChip,
                    borderColor: isDark ? '#444' : COLORS.border,
                  },
            ]}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={cat.label}
          >
            <Text
              style={[
                styles.chipText,
                isActive
                  ? styles.chipTextActive
                  : { color: isDark ? '#90CAF9' : COLORS.categoryChipText },
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginVertical: 4,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: COLORS.categoryChipActive,
    borderColor: COLORS.categoryChipActive,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  chipTextActive: {
    color: COLORS.categoryChipTextActive,
    fontWeight: '600',
  },
});

export default CategoryFilter;
