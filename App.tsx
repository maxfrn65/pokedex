/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home.tsx';
import Recherche from './screens/Recherche.tsx';
import Equipe from './screens/Equipe.tsx';
import Parametres from './screens/Parametres.tsx';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Recherche" component={Recherche} />
      <Tab.Screen name="Équipe" component={Equipe} />
      <Tab.Screen name="Paramètres" component={Parametres} />
    </Tab.Navigator>
  );
};

const StackScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Accueil"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
      {/* Ajoutez d'autres écrans empilables ici si nécessaire */}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackScreenNavigator />
    </NavigationContainer>
  );
};

export default App;
