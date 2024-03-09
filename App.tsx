/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {registerRootComponent} from 'expo';
import {HeaderBackButton} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/homeStack/Home.tsx';
import HomeDetails from './screens/homeStack/HomeDetails.tsx';
import Search from './screens/searchStack/Search.tsx';
import Team from './screens/Team.tsx';
import Settings from './screens/Settings.tsx';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SearchDetails from './screens/searchStack/SearchDetails.tsx';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  // @ts-ignore
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
      }}>
      <Tab.Screen
        name="Pokédex"
        component={HomeStack}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="pokeball" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({color}) => (
            <IonIcon name="search" size={20} color={color} />
          ),
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
          tabBarIcon: ({color}) => (
            <IonIcon name="people" size={20} color={color} />
          ),
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
          tabBarIcon: ({color}) => (
            <IonIcon name="settings" size={20} color={color}/>
          ),
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
        component={HomeDetails}
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

// @ts-ignore
const SearchStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={HomeDetails}
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
