import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import MainHeader from '../Components/MainHeader';


const FavoriteScreen = () => {
  return (
    <View >
      <MainHeader title="Home"/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  }
})


export default FavoriteScreen;