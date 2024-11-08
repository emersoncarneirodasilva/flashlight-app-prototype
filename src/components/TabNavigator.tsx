import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigator() {
  const { theme } = useContext(ThemeContext)!;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme === "dark" ? "#000" : "#fff",
        tabBarInactiveBackgroundColor: theme === "dark" ? "#000" : "#fff",
        tabBarActiveTintColor: theme === "dark" ? "#4f6df3" : "#2b48d1",
        tabBarInactiveTintColor: theme === "dark" ? "#665" : "#998",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Lanterna",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="flashlight-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
