import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import ThemeView from '../ThemeView';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../Button';
import { useRouter } from 'expo-router';
import Colors from '~/utils/colors';
import { useThemeStore } from '~/store/store';

const HEADER_HEIGHT = 400;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const router = useRouter();
  const theme = useThemeStore((state) => state.theme);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemeView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          <ThemeView className="">
            <Button
              title="Back"
              className="! absolute left-4 right-0 top-7 z-10 flex-row items-center "
              style={{
                width: 55,
                height: 50,
              }}
              icon={<Ionicons name="chevron-back" size={20} color={Colors[theme].text} />}
              onPress={() => {
                router.back();
              }}
            />
          </ThemeView>
          {headerImage}
        </Animated.View>
        <ThemeView style={styles.content}>{children}</ThemeView>
      </Animated.ScrollView>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 400,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
