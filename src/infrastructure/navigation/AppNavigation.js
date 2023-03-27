import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RestaurantScreens from "../../features/screens/RestaurantScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Map = () => <Text>Maps</Text>;
const Settings = () => <Text>Settings</Text>;

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = "ios-restaurant-sharp";
            } else if (route.name === "Maps") {
              iconName = "map";
            } else if (route.name === "Settings") {
              iconName = "ios-settings";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreens} />
        <Tab.Screen name="Maps" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
