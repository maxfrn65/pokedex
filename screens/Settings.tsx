import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

function Settings() {
  return (
    <View style={styles.settings}>
      <View>
        <Pressable>
          <IonIcon name="person-circle" size={24} color={'#4f4f4f'} />
          <Text>Account</Text>
        </Pressable>
        <Pressable>
          <IonIcon name="color-palette" size={24} color={'#4f4f4f'} />
          <Text>Appearance</Text>
        </Pressable>
        <Pressable>
          <IonIcon name="language" size={24} color={'#4f4f4f'} />
          <Text>Language</Text>
        </Pressable>
        <Pressable>
          <IonIcon name="accessibility" size={24} color={'#4f4f4f'} />
          <Text>Accessibility</Text>
        </Pressable>
        <Pressable>
          <Octicons name="bell-fill" size={24} color={'#4f4f4f'} />
          <Text>Notifications</Text>
        </Pressable>
        <Pressable>
          <IonIcon name="star" size={24} color={'#4f4f4f'} />
          <Text>Rate the App</Text>
        </Pressable>
        <Pressable>
          <IonIcon name="exit" size={24} color={'#4f4f4f'} />
          <Text>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default Settings;
