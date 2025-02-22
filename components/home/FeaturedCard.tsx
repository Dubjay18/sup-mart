import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';
import ThemeText from '../ThemeText';
import ThemeView from '../ThemeView';
import { AntDesign, Entypo } from '@expo/vector-icons';

var { width } = Dimensions.get('window');

type FeaturedCardProps = {
  name: string;
  imageUrl: any;
  price: number;
  onPress: () => void;
};

const FeaturedCard = ({ name, imageUrl, price, onPress }: FeaturedCardProps) => {
  const theme = useThemeStore((state) => state.theme);
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <View
      className="rounded-lg pb-4"
      style={{
        backgroundColor: Colors[theme].foreground,
      }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image
          source={imageUrl}
          className="w-full rounded-lg"
          style={{
            height: width / 2 - 50,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>

      <View className="p-4">
        <ThemeText className="text-sm">{name}</ThemeText>
        <View className="flex w-full flex-row items-center justify-between overflow-visible ">
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
    </View>
  );
};

export default FeaturedCard;
