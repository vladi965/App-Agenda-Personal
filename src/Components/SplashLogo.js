import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const SplashLogo = () => {
    return(
        <View style={styles.logoViewStyle}>
            <Image style={styles.logo} source={require('../../assets/chat.png')} resizeMode= 'contain' />
        </View>
    );
};

const styles = StyleSheet.create({
    logoViewStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
      backgroundColor: '#4D4A95',
      width: 2,
      height: 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    logo:{
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export default SplashLogo;