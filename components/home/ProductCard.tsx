import React from 'react';
import { View, Text, Image } from 'react-native';
import ThemeView from '../ThemeView';
import ThemeText from '../ThemeText';
import { Entypo } from '@expo/vector-icons';
import Colors from '~/utils/colors';
import { useThemeStore } from '~/store/store';
import { truncateString } from '~/utils/string';

const ProductCard = ({
  name,
  price,
  imageUrl,
  onPress,
}: {
  name: string;
  price: number;
  imageUrl: any;
  onPress: () => void;
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const theme = useThemeStore((state) => state.theme);
  return (
    <ThemeView
      className="w-full flex-row rounded-lg"
      style={{
        backgroundColor: Colors[theme].foreground,
      }}>
      <Image source={imageUrl} style={{ width: 100, height: 100 }} />
      <View className="flex-1 p-4">
        <ThemeText className="text-md">{name}</ThemeText>
        <ThemeText className="text-md text-gray-300">
          {truncateString('Snopy SN- BT96 Pretty Back Bluetooth Headphone', 20)}
        </ThemeText>
        <View className="flex-row items-center justify-between">
          <ThemeText className="text-2xl">N {price}</ThemeText>
          {isLiked ? (
            <Entypo
              name="heart"
              size={20}
              color={Colors[theme].primary}
              onPress={() => setIsLiked(!isLiked)}
            />
          ) : (
            <Entypo
              name="heart-outlined"
              size={20}
              color={theme != 'light' ? 'white' : 'black'}
              onPress={() => setIsLiked(!isLiked)}
            />
          )}
        </View>
      </View>
    </ThemeView>
  );
};

export default ProductCard;
