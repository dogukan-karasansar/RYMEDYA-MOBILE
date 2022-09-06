import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* Screens */
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
