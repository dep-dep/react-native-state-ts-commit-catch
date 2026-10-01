import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Todo App" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      tabBarIcon: ({ color, size }) => ( 
        <Ionicons name="home" color={color} size={size} />
      )
    </Tabs>
  );
}
