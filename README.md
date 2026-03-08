# News Feed Mobile App 📰

A React Native mobile application built with Expo that displays a live news feed with category filtering, search, and article detail views.

## Features

- 📰 **News Feed** – Browse top headlines from various categories
- 🔍 **Search** – Search for articles by keyword
- 🏷️ **Category Filter** – Filter by General, Business, Technology, Sports, Health, Science, or Entertainment
- 🔄 **Pull-to-refresh** – Refresh articles with a swipe
- 📖 **Article Detail** – View full article content with a "Read Full Article" link
- 🌙 **Dark Mode** – Automatic dark/light mode support
- 📡 **NewsAPI integration** – Connects to [NewsAPI.org](https://newsapi.org) when an API key is provided
- 🗃️ **Mock data fallback** – Works offline with realistic mock articles

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android emulator) or Xcode (for iOS simulator)

### Installation

```bash
npm install
```

### (Optional) Configure News API

Create a `.env` file in the project root:

```
EXPO_PUBLIC_NEWS_API_KEY=your_api_key_here
```

Get a free API key at [https://newsapi.org](https://newsapi.org).

Without an API key, the app displays built-in mock articles.

### Running the App

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS required)
npm run ios

# Run in browser
npm run web
```

## Project Structure

```
news-mobileapp/
├── App.tsx                    # Root component with navigation setup
├── src/
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── services/
│   │   └── newsService.ts     # News API integration
│   ├── hooks/
│   │   └── useNews.ts         # Custom hook for news state management
│   ├── screens/
│   │   ├── HomeScreen.tsx     # Main news feed screen
│   │   └── ArticleDetailScreen.tsx  # Article detail screen
│   ├── components/
│   │   ├── NewsCard.tsx       # Article card component
│   │   ├── SearchBar.tsx      # Search input component
│   │   └── CategoryFilter.tsx # Horizontal category chips
│   ├── constants/
│   │   ├── index.ts           # App colors and category definitions
│   │   └── mockData.ts        # Mock articles for offline use
│   └── utils/
│       └── dateUtils.ts       # Date formatting utilities
└── __tests__/                 # Unit tests
```

## Running Tests

```bash
npm test
```

## Tech Stack

- **[Expo](https://expo.dev)** – React Native toolchain
- **[React Navigation](https://reactnavigation.org)** – Screen navigation
- **[NewsAPI.org](https://newsapi.org)** – News data provider
- **TypeScript** – Static typing
