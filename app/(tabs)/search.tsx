import React from 'react';
import { View, Text } from 'react-native';
import CategoriesGrid from '~/components/CategoriesGrid';
import { Container } from '~/components/Container';
import ThemeView from '~/components/ThemeView';

const Search = () => {
  return (
    <ThemeView className="flex-1">
      <Container>
        <CategoriesGrid />
      </Container>
    </ThemeView>
  );
};

export default Search;
