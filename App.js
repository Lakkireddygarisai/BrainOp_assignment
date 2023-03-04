import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Page1 from './src/Page1';
import Page2 from './src/Page2';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

export default App;

