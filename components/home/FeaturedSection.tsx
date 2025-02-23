import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import ThemeView from '../ThemeView';
import ThemeText from '../ThemeText';

import FeaturedCard from './FeaturedCard';

const MOCK_FEATURED = [
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

const FeaturedSection = () => {
  return (
    <ThemeView>
      <ThemeText className="my-4 font-psemibold text-xl">Featured</ThemeText>

      <FlatList
        data={MOCK_FEATURED}
        horizontal
        renderItem={({
          item,
        }: {
          item: {
            id: string;
            name: string;
            imageUrl: any;
            price: number;
            onPress: () => void;
          };
        }) => (
          <View
            className=""
            style={{
              width: 200,
              padding: 10,
              height: 300,
            }}>
            <FeaturedCard
              name={item.name}
              price={item.price}
              onPress={item.onPress}
              imageUrl={item.imageUrl}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </ThemeView>
  );
};

export default FeaturedSection;
