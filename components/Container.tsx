import { SafeAreaView } from 'react-native';
import { themeState, useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore((state: themeState) => state.theme);
  return (
    <SafeAreaView
      className={styles.container}
      style={{
        backgroundColor: Colors[theme].background,
      }}>
      {children}
    </SafeAreaView>
  );
};

const styles = {
  container: 'flex flex-1 p-6',
};
