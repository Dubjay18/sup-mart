import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

import ThemeInput from '~/components/ThemeInput';
import ThemeText from '~/components/ThemeText';
import ThemeView from '~/components/ThemeView';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <Container>
        <ThemeView className="flex-1 items-center justify-center p-4">
          <ThemeText className="mb-4 text-2xl font-bold">Login</ThemeText>
          <ThemeInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="mb-4 w-full rounded-md p-2"
          />
          <ThemeInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="mb-4 w-full rounded-md p-2"
          />
          <Button title="Login" />

          <Pressable
            className="mt-5 w-full items-center rounded-md p-2"
            onPress={() => {
              router.navigate('/(auth)/register');
            }}>
            <ThemeText>
              Don't have an account? <ThemeText className="!text-primary">Register</ThemeText>
            </ThemeText>
          </Pressable>
        </ThemeView>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default login;
