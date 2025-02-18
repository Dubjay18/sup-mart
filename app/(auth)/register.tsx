import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { Button } from '~/components/Button';
import ThemeInput from '~/components/ThemeInput';
import ThemeText from '~/components/ThemeText';
import ThemeView from '~/components/ThemeView';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ThemeView className="flex-1 items-center justify-center p-4">
        <ThemeText className="mb-4 text-2xl font-bold">Register</ThemeText>
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
        <ThemeInput
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="mb-4 w-full rounded-md p-2"
        />
        <Button title="Register" />

        <Pressable
          className="mt-5 w-full items-center rounded-md p-2"
          onPress={() => {
            router.navigate('/(auth)/login');
          }}>
          <ThemeText>
            Already have an account? <ThemeText className="!text-primary">Login</ThemeText>
          </ThemeText>
        </Pressable>
      </ThemeView>
    </KeyboardAvoidingView>
  );
};

export default Register;
