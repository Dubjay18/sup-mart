export interface Category {
  id: string;
  name: string;
  imageUrl: any;
}

export const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    imageUrl: require('../assets/categories/electronics.png'),
  },
  {
    id: '2',
    name: 'Music',
    imageUrl: require('../assets/categories/music.png'),
  },
  {
    id: '3',
    name: 'Fashion',
    imageUrl: require('../assets/categories/fashion.png'),
  },
  {
    id: '4',
    name: 'Digital Services',
    imageUrl: require('../assets/categories/digital_service.png'),
  },
];
