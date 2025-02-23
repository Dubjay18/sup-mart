import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ThemeText from '../ThemeText';
import ProductCard from './ProductCard';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    imageUrl: require('../../assets/categories/digital_service.png'),
    price: 150,
    onPress: () => {},
  },
  {
    id: '2',
    name: 'Adidas Yeezy 350',
    imageUrl: require('../../assets/categories/digital_service.png'),
    price: 250,
    onPress: () => {},
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    imageUrl: require('../../assets/categories/digital_service.png'),
    price: 150,
    onPress: () => {},
  },
  {
    id: '4',
    name: 'Adidas Yeezy 350',
    imageUrl: require('../../assets/categories/digital_service.png'),
    price: 250,
    onPress: () => {},
  },
];

const AllSection = () => {
  return (
    <>
      <ThemeText className="my-4 font-psemibold text-xl">All </ThemeText>
      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={({ item }: any) => (
          <ProductCard
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            onPress={item.onPress}
          />
        )}
        scrollEnabled
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </>
  );
};

export default AllSection;
