import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeState, useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

const CartButton = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <TouchableOpacity
      className="relative rounded-full p-3"
      style={{ backgroundColor: Colors[theme].foreground }}>
      <View className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
        <Text className="text-xs text-white">1</Text>
      </View>
      <AntDesign name="shoppingcart" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default CartButton;
