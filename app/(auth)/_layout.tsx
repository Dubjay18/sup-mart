import { Redirect, Slot } from 'expo-router';
import React from 'react';

const Layout = () => {
  const auth = true;
  if (auth) {
    return <Redirect href={'/(tabs)/home'} />;
  }

  return <Slot />;
};

export default Layout;
