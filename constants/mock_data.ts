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

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    imageUrl: require('@assets/categories/digital_service.png'),
    price: 150,
    description:
      'The Nike Air Max 270 is a stylish and comfortable shoe that is perfect for everyday wear.',
    onPress: () => {},
  },
  {
    id: '2',
    name: 'Adidas Yeezy 350',
    imageUrl: require('@assets/categories/digital_service.png'),
    price: 250,
    description:
      'The Adidas Yeezy 350 is a stylish and comfortable shoe that is perfect for everyday wear.',
    onPress: () => {},
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    imageUrl: require('@assets/categories/digital_service.png'),
    price: 150,
    description:
      'The Nike Air Max 270 is a stylish and comfortable shoe that is perfect for everyday wear.',
    onPress: () => {},
  },
  {
    id: '4',
    name: 'Adidas Yeezy 350',
    imageUrl: require('@assets/categories/digital_service.png'),
    price: 250,
    description:
      'The Adidas Yeezy 350 is a stylish and comfortable shoe that is perfect for everyday wear.',
    onPress: () => {},
  },
];

export const mockGetProductById = (id: string) => {
  return MOCK_PRODUCTS.find((product) => product.id === id);
};
