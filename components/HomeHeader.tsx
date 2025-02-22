import React from 'react';
import { View, Text } from 'react-native';
import ThemeView from './ThemeView';
import ThemeText from './ThemeText';
import CartButton from './home/CartButton';

type HomeHeaderProps = {
  name: string;
};

const HomeHeader = ({ name }: HomeHeaderProps) => {
  return (
    <ThemeView className="">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <ThemeView>
          <ThemeText className="font-plight">Hello,</ThemeText>
          <ThemeText className="font-psemibold text-2xl">{name}</ThemeText>
        </ThemeView>
        <CartButton />
      </View>
    </ThemeView>
  );
};

export default HomeHeader;
