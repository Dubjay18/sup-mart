import { forwardRef } from 'react';
import { Pressable, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import ThemeText from './ThemeText';

type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, icon, ...touchableProps }, ref) => {
  return (
    <Pressable
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}>
      {icon ? (
        <View className="mr-2">{icon}</View>
      ) : (
        <ThemeText className={styles.buttonText}>{title}</ThemeText>
      )}
    </Pressable>
  );
});

const styles = {
  button: 'items-center bg-primary rounded-[28px] w-full shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
