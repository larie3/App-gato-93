import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import CreatePost from '../screens/createPost';
import More from '../screens/more';

const Tab = createBottomTabNavigator();

 const BottomTabNavigator = ()=> {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'home') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } if (route.name === 'create Post') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'more'){
              iconName = focused ? 'more' : 'more--outline'  
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="Create Post" component={CreatePost} />
        <Tab.Screen name="more" component={More} />
      </Tab.Navigator>
    
  );
}

export default BottomTabNavigator 