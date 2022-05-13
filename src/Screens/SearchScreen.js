import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainHeader from '../Components/MainHeader';

const SearchScreen = () => {
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


export default SearchScreen;