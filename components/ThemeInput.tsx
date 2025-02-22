import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

type ThemeInputProps = {
  style?: object;
} & React.ComponentProps<typeof TextInput>;

const ThemeInput = React.forwardRef<TextInput, ThemeInputProps>(
  ({ style, ...props }: ThemeInputProps, ref) => {
    const theme = useThemeStore((state) => state.theme);

    const inputStyle = StyleSheet.create({
      input: {
        backgroundColor: Colors[theme].inputBackground,
        color: Colors[theme].text,
        borderColor: Colors[theme].inputBorder,
        borderWidth: 0,
        borderRadius: 20,
        height: 40,
        padding: 10,
        paddingHorizontal: 15,
      },
    });

    return (
      <TextInput
        {...props}
        ref={ref}
        style={[inputStyle.input, style]}
        className="font-pregular"
        placeholderTextColor={Colors[theme].inputPlaceholder}
      />
    );
  }
);

ThemeInput.displayName = 'ThemeInput';

export default ThemeInput;
