import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

function Settings() {
  return (
    <View style={styles.settings}>
      <View style={styles.settingsContainer}>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="person-circle" size={20} color={'#4f4f4f'} />
          <Text>Account</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="color-palette" size={20} color={'#4f4f4f'} />
          <Text>Appearance</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="language" size={20} color={'#4f4f4f'} />
          <Text>Language</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="accessibility" size={20} color={'#4f4f4f'} />
          <Text>Accessibility</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <Octicons name="bell-fill" size={20} color={'#4f4f4f'} />
          <Text>Notifications</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="star" size={20} color={'#4f4f4f'} />
          <Text>Rate the App</Text>
        </Pressable>
        <View style={styles.settingsSeparator}></View>
        <Pressable style={styles.settingsWrapper}>
          <IonIcon name="exit" size={20} color={'red'} />
          <Text style={{color: 'red'}}>Log Out</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    height: '100%',
    padding: 20,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  settingsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  settingsSeparator: {
    borderWidth: 0.4,
    alignItems: 'flex-end',
    borderColor: '#e7e7e7',
    width: '100%',
  },
});

export default Settings;
