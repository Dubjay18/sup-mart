import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import ParallaxScroll from '~/components/product/ParallaxScroll';
import ThemeText from '~/components/ThemeText';
import ThemeView from '~/components/ThemeView';
import { mockGetProductById } from '~/constants/mock_data';
import { useThemeStore } from '~/store/store';
var { width, height } = Dimensions.get('window');

export default function Details() {
  const params = useLocalSearchParams<{ id: string }>();
  const theme = useThemeStore((state) => state.theme);
  const router = useRouter();
  const product = mockGetProductById(params.id);

  if (!product) {
    return (
      <Container>
        <ThemeText>Product not found</ThemeText>
      </Container>
    );
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerBackground: Colors[theme].background,
          headerShown: false,
        }}
      />

      <ParallaxScroll
        headerBackgroundColor={{ dark: Colors.dark.background, light: Colors.light.background }}
        headerImage={
          <Image source={product.imageUrl} style={{ width: width, height: height / 2 }} />
        }>
        <ThemeText className="font-pbold text-2xl">{product.name}</ThemeText>
        <ThemeText className="text-gray-300">{product.description}</ThemeText>
      </ParallaxScroll>
      <View className="absolute bottom-0 left-0  right-0 border-t border-gray-500 bg-transparent p-7">
        <View className="mt-auto flex-row items-center justify-between">
          <ThemeText className="text-2xl">N {product.price}</ThemeText>
          <View className="w-3/4">
            <Button title="Add to cart" onPress={() => router.navigate('/')} />
          </View>
        </View>
      </View>
    </>
  );
}
