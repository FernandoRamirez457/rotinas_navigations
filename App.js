import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Details from './screens/details';

export default function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home}></stack.Screen>
        <stack.Screen name='Details' component={Details}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}