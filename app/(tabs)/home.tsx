import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import CategoriesGrid from '~/components/CategoriesGrid';
import { Container } from '~/components/Container';
import HomeHeader from '~/components/HomeHeader';
import SearchInput from '~/components/SearchInput';
import ThemeView from '~/components/ThemeView';
import { useThemeStore } from '~/store/store';

const Home = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <ThemeView className="flex-1 ">
      <Container>
        <HomeHeader name="Jin woo" />
        <SearchInput />
      </Container>
      <View style={{ height: 10, width: 10 }} />
      <StatusBar style={theme != 'light' ? 'light' : 'dark'} />
    </ThemeView>
  );
};

export default Home;
