import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function SettingsScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };

  return (
    <SafeAreaView>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Text>Estamos en Settings Screens</Text>
      <Button onPress={ () => goToPage('Home')} title='Ir a Home'/>
    </SafeAreaView>
  )
}