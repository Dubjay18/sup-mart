import { Tabs } from 'expo-router';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useThemeStore } from '~/store/store';
import Colors from '~/utils/colors';
import { Image, Text, View } from 'react-native';

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="h-6 w-6" />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};
function TabBarIcon(props: { name: React.ComponentProps<typeof Feather>['name']; color: string }) {
  return <Feather size={28} style={{ marginBottom: -22 }} {...props} />;
}
export default function TabLayout() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].primary,
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors[theme].foreground,
          borderTopWidth: 0,
          borderTopColor: Colors[theme].background,
          height: 70,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          position: 'absolute',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="search" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
