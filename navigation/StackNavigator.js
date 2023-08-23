import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guia"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Guia" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
