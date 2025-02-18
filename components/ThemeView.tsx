import React from 'react';
import { View } from 'react-native';
import { themeState, useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

type ThemeTextProps = {
  className?: string;
  style?: object;
  children: React.ReactNode;
};

const ThemeView = ({ className, style, children }: ThemeTextProps) => {
  const theme = useThemeStore((state: themeState) => state.theme);

  return (
    <View style={[{ backgroundColor: Colors[theme].background }, style]} className={className}>
      {children}
    </View>
  );
};

export default ThemeView;
