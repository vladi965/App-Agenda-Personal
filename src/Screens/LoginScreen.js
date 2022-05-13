import React from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/GlobalStyles';
import ButtonGradient from '../Components/Button/ButtonGradient';

//Imagen del Logo
const image = require('../../assets/open-book.png');

export default function LoginScreen(props) {

    /*export default function LoginScreen(props) */
    /* const { navigation } = props;

    const goToLogin = (pageName) => {
        navigation.navigate(pageName);
    }; */

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageLogo} />
            <Text style={styles.titulo}>Hello</Text>
            <Text style={styles.subtitulo}>Sign In to your account</Text>
            <TextInput style={styles.textInput} placeholder= 'example@gmail.com' />
            <TextInput style={styles.textInput} placeholder= 'password'/>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
            <ButtonGradient 
                Title="Click Me"
                onPress={() =>alert('Button Clicked')}
             />
            <View style={styles.contentRegister}>
                <Text style={styles.textRegister}>¿No tiene una cuenta?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <Text style={styles.textReference}>Registrate</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='auto'/>
            {/* <Button onPress={ () => goToLogin('Home')} title='Ir a Home'/> */}            
        </View>
    );
}