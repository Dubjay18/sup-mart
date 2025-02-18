import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import CategoriesGrid from '~/components/CategoriesGrid';
import ThemeView from '~/components/ThemeView';
import { useThemeStore } from '~/store/store';

const Home = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <ThemeView className="flex-1 ">
      <StatusBar style={theme != 'light' ? 'light' : 'dark'} />
      <ThemeView className="mb-4">
        <Text className="text-2xl font-bold">Home</Text>
      </ThemeView>
    </ThemeView>
  );
};

export default Home;
