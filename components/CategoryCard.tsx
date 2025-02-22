import React from 'react';
import { Image, Dimensions, Pressable, View, TouchableOpacity } from 'react-native';
import { Category } from '~/constants/mock_data';
import ThemeText from './ThemeText';
import { useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

var { width, height } = Dimensions.get('window');

const CategoryCard = ({ category, onPress }: { category: Category; onPress?: () => void }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <TouchableOpacity
      className="rounded-lg pb-4"
      style={{
        backgroundColor: Colors[theme].foreground,
      }}>
      <Image
        source={category.imageUrl}
        className="w-full rounded-lg"
        style={{
          height: width / 2 - 50,
          borderRadius: 10,
        }}
      />
      <View className="flex flex-row items-center justify-center py-3">
        <ThemeText className="text-xl">{category.name}</ThemeText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
