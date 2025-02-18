import React from 'react';
import { View, Text } from 'react-native';
import { useThemeStore } from '~/store/store';

type ThemeTextProps = {
  className?: string;
  style?: object;
  children: React.ReactNode;
};

const ThemeText = ({ className, style, children }: ThemeTextProps) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Text
      style={[{ color: theme === 'light' ? 'black' : 'white' }, style]}
      className={`${className} font-pregular`}>
      {children}
    </Text>
  );
};

export default ThemeText;
