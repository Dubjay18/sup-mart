import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ThemeView from './ThemeView';
import ThemeText from './ThemeText';
import { MOCK_CATEGORIES } from '~/constants/mock_data';
import CategoryCard from './CategoryCard';
import { Container } from './Container';
import SearchInput from './SearchInput';

const CategoriesGrid = () => {
  return (
    <ThemeView className="flex-1 ">
      <ThemeView className="my-4">
        <SearchInput />
      </ThemeView>
      <ThemeView className="mb-4">
        <ThemeText className="font-psemibold text-2xl ">Categories</ThemeText>
      </ThemeView>
      <FlatList
        data={MOCK_CATEGORIES}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            className=""
            style={{
              width: '50%',
              padding: 10,
            }}>
            <CategoryCard category={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </ThemeView>
  );
};

export default CategoriesGrid;
