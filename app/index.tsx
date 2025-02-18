import { Stack, Link, Redirect } from 'expo-router';
import React from 'react';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Redirect href={'/(auth)/login'} />
    </>
  );
}
