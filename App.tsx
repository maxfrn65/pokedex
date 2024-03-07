/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { registerRootComponent } from 'expo';
import {HeaderBackButton} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from './screens/homeStack/Details.tsx';
import Home from './screens/homeStack/Home.tsx';
import Search from './screens/Search.tsx';
import Team from './screens/Team.tsx';
import Settings from './screens/Settings.tsx';
import { AppRegistry } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  // @ts-ignore
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokédex"
        component={HomeStack}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
};

// @ts-ignore
const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#d50000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              tintColor={'#fff'}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

registerRootComponent(App);
export default App;
