import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Product = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Product ID: {id}</Text>
    </View>
  );
};

export default Product;
