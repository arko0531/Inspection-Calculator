import theme from '@styles';
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const TabNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.Sub.Black[10],
          paddingTop: 6
        },
        tabBarActiveTintColor: theme.colors.Main.Primary,
        tabBarInactiveTintColor: theme.colors.Sub.Black[100]
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '기록',
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" size={size} color={color} />
          ),
          tabBarLabel: '기록'
        }}
      />
    </Tabs>
  );
};

export default TabNavigation;
