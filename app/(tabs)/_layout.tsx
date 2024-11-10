import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';  // Import Ionicons

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: () => <Ionicons name="menu" size={24} color="black" />,  // Menggunakan nama icon yang valid
        }}
      />
      <Tabs.Screen
        name="Detail"
        options={{
          title: 'Product Detail',
          tabBarIcon: () => <Ionicons name="information-circle" size={24} color="black" />,  // Icon yang valid
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
          tabBarIcon: () => <Ionicons name="cart" size={24} color="black" />,  // Icon untuk Cart
        }}
      />
    </Tabs>
  );
}
