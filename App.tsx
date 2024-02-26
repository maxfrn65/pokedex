/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import {HeaderBackButton} from '@react-navigation/elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from './screens/homeStack/Details.tsx';
import Home from './screens/homeStack/Home.tsx';
import Recherche from './screens/Recherche.tsx';
import Equipe from './screens/Equipe.tsx';
import Parametres from './screens/Parametres.tsx';

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
      <Tab.Screen name="Recherche" component={Recherche} />
      <Tab.Screen name="Équipe" component={Equipe} />
      <Tab.Screen name="Paramètres" component={Parametres} />
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
        name="Détails"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#d50000',
          },
          headerTintColor: '#fff',
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              label="Retour"
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

export default App;
