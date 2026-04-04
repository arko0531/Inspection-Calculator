import { Tabs } from 'expo-router';
import { Icon, useTheme } from 'react-native-paper';

const TabNavigation = () => {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surfaceVariant,
          height: 80,
          paddingTop: 6
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon source="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '기록',
          tabBarIcon: ({ color, size }) => (
            <Icon source="file-document-outline" color={color} size={size} />
          ),
          tabBarLabel: '기록'
        }}
      />
    </Tabs>
  );
};

export default TabNavigation;
