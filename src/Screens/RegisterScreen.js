import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { styles } from '../Styles/GlobalStyles';
import ButtonRegister from './Button/ButtonRegister';

//Imagen del Registro
const image = require('../../assets/registro.png');

export default function RegisterScreen(props) {
    /*export default function LoginScreen(props) */
  
    /* const { navigation } = props;

    const goToLogin = (pageName) => {
        navigation.navigate(pageName);
    }; */

    


    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageLogo} />
            <Text style={styles.tituloTwo}>Registrate</Text>
            <TextInput style={styles.textInput} placeholder= 'Nombre' />
            <TextInput style={styles.textInput} placeholder= 'example@gmail.com' />
            <TextInput style={styles.textInput} placeholder= 'password'/>
            <ButtonRegister />
            <View style={styles.contentRegister}>
                <Text style={styles.textRegister}>¿Ya tiene una cuenta?</Text>
                <TouchableOpacity>
                    <Text style={styles.textReference}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='auto'/>
            {/* <Button onPress={ () => goToLogin('Home')} title='Ir a Home'/> */}            
        </View>
    );
}