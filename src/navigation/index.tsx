import { colors } from '@styles/theme/colors';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';

const TabNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.Sub.Black[10],
          height: 80,
          paddingTop: 6
        }
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
