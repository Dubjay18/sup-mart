import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ThemeText from '../ThemeText';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '~/constants/mock_data';

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
