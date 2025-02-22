import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

import ThemeInput from './ThemeInput';
import ThemeView from './ThemeView';
import { useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeView>
      <ThemeView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: Colors[theme].inputBackground,
        }}
        className="rounded-full p-2">
        <AntDesign
          name="search1"
          size={20}
          color="white"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <ThemeInput
          style={{ flex: 1 }}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <MaterialCommunityIcons
          name="microphone"
          size={24}
          color="white"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
      </ThemeView>
    </ThemeView>
  );
};

export default SearchInput;
