import { Article } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'mock-1',
    title: 'Global Markets Rally as Inflation Cools Down',
    description:
      'Stock markets around the world surged on Tuesday after new data showed inflation declining faster than expected, raising hopes of interest rate cuts.',
    content:
      'Stock markets around the world surged on Tuesday after new data showed inflation declining faster than expected. The S&P 500 climbed 2.3%, the Nasdaq jumped 3.1%, and European indices also posted strong gains. Economists say the data increases the likelihood of central banks cutting interest rates in the coming months.',
    url: 'https://example.com/global-markets-rally',
    urlToImage: 'https://picsum.photos/seed/finance/800/450',
    author: 'Jane Smith',
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-finance', name: 'Finance Today' },
    category: 'business',
  },
  {
    id: 'mock-2',
    title: 'New AI Model Sets Record on Benchmark Tests',
    description:
      'A leading tech company has unveiled an artificial intelligence model that surpasses all previous records on standard industry benchmarks.',
    content:
      'A leading technology company announced the release of its next-generation AI model, which has outperformed all existing systems on standard industry benchmarks. The model demonstrates unprecedented capabilities in reasoning, code generation, and multimodal understanding.',
    url: 'https://example.com/ai-model-record',
    urlToImage: 'https://picsum.photos/seed/ai/800/450',
    author: 'Alex Johnson',
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-tech', name: 'Tech Insider' },
    category: 'technology',
  },
  {
    id: 'mock-3',
    title: 'Scientists Discover New Species in Amazon Rainforest',
    description:
      'A team of international researchers has identified more than 20 previously unknown species during an expedition in the Amazon basin.',
    content:
      'An international team of biologists has returned from a month-long expedition in the Amazon Rainforest with remarkable findings. The team discovered over 20 new species, including a frog with unusual color patterns, several insects, and two plant species never seen before.',
    url: 'https://example.com/amazon-species',
    urlToImage: 'https://picsum.photos/seed/nature/800/450',
    author: 'Maria Gonzalez',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-science', name: 'Science Daily' },
    category: 'science',
  },
  {
    id: 'mock-4',
    title: 'Championship Finals Set Records for Viewership',
    description:
      'This year\'s championship game drew the largest television audience in the event\'s history, according to ratings data released on Monday.',
    content:
      'The championship finals shattered viewership records with an estimated 120 million viewers tuning in worldwide. The dramatic match, which went into overtime, is being celebrated as one of the greatest sporting events of the decade.',
    url: 'https://example.com/championship-viewership',
    urlToImage: 'https://picsum.photos/seed/sports/800/450',
    author: 'Tom Williams',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-sports', name: 'Sports Network' },
    category: 'sports',
  },
  {
    id: 'mock-5',
    title: 'Breakthrough Drug Shows Promise Against Drug-Resistant Infections',
    description:
      'Clinical trials of a new antibiotic compound have shown remarkable results against bacteria that are resistant to existing treatments.',
    content:
      'Researchers announced promising Phase 3 trial results for a new antibiotic compound that targets drug-resistant bacteria. The drug showed a 94% efficacy rate against several strains of MRSA and other hard-to-treat infections, offering hope to millions of patients worldwide.',
    url: 'https://example.com/antibiotic-breakthrough',
    urlToImage: 'https://picsum.photos/seed/health/800/450',
    author: 'Dr. Sarah Lee',
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-health', name: 'Health Weekly' },
    category: 'health',
  },
  {
    id: 'mock-6',
    title: 'Acclaimed Film Director Announces New Epic Project',
    description:
      'Award-winning director Christopher Nolan has confirmed he is working on an ambitious new film set to begin production later this year.',
    content:
      'Acclaimed filmmaker Christopher Nolan has announced his next project, a historical epic spanning three decades and three continents. The film, tentatively titled "Meridian," will explore themes of migration, identity, and technology through interconnected storylines.',
    url: 'https://example.com/nolan-new-film',
    urlToImage: 'https://picsum.photos/seed/film/800/450',
    author: 'Emily Clarke',
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-entertainment', name: 'Entertainment Weekly' },
    category: 'entertainment',
  },
  {
    id: 'mock-7',
    title: 'City Council Approves Major Infrastructure Plan',
    description:
      'The council voted to approve a $4 billion package to upgrade roads, bridges, and public transit systems over the next decade.',
    content:
      'In a landmark decision, the city council approved a sweeping $4 billion infrastructure package. The plan includes renovating 500 miles of roads, replacing aging bridges, and expanding the public transit network with 15 new metro stations.',
    url: 'https://example.com/infrastructure-plan',
    urlToImage: 'https://picsum.photos/seed/city/800/450',
    author: 'Robert Kim',
    publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-general', name: 'City News' },
    category: 'general',
  },
  {
    id: 'mock-8',
    title: 'Electric Vehicle Sales Surge to New High',
    description:
      'Global sales of electric vehicles reached a new quarterly record, driven by falling battery prices and increased model variety.',
    content:
      'The electric vehicle market hit a new milestone in the latest quarter, with global sales surpassing 4 million units. Analysts credit falling battery costs, government incentives, and a wider selection of models across all price ranges for the surge.',
    url: 'https://example.com/ev-sales-record',
    urlToImage: 'https://picsum.photos/seed/electric/800/450',
    author: 'Lisa Chang',
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-business', name: 'Business Times' },
    category: 'business',
  },
  {
    id: 'mock-9',
    title: 'Space Agency Reveals Plans for Moon Base Construction',
    description:
      'NASA has released detailed blueprints for a permanent lunar outpost designed to support long-term human habitation by 2035.',
    content:
      'NASA unveiled comprehensive plans for a permanent moon base that could house up to 12 astronauts by 2035. The outpost would be constructed using lunar regolith and would include living quarters, a research laboratory, and a landing pad capable of supporting deep-space missions.',
    url: 'https://example.com/moon-base-plans',
    urlToImage: 'https://picsum.photos/seed/space/800/450',
    author: 'James Walker',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-science2', name: 'Space Exploration News' },
    category: 'science',
  },
  {
    id: 'mock-10',
    title: 'Renewable Energy Now Powers 40% of Global Electricity',
    description:
      'For the first time in history, renewable sources including solar and wind account for more than 40% of global electricity generation.',
    content:
      'A new report from the International Energy Agency shows that renewable energy sources now supply 40% of the world\'s electricity, a historic milestone. Solar power alone accounts for 18% of the total, while wind contributes 16%. The remaining share comes from hydropower and other renewable sources.',
    url: 'https://example.com/renewable-energy-milestone',
    urlToImage: 'https://picsum.photos/seed/renewable/800/450',
    author: 'Anna Brown',
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    source: { id: 'example-science3', name: 'Energy Monitor' },
    category: 'science',
  },
];
