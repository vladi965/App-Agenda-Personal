import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashLogo from '../Components/SplashLogo';


const SplashScreen = () => {
    return(
        <SafeAreaView style={styles.safeViewStyle}>
            <View style={styles.viewStyle}>
                <SplashLogo />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeViewStyle: {
      backgroundColor: '#4D4A95',
      flex: 1,
      justifyContent: 'center',
    },
    viewStyle: {
      alignContent: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 18,
      fontWeight: '500',
      marginTop: 10,
      alignSelf: 'center',
    },
  });

  export default SplashScreen;
