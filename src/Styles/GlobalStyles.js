import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { myColors } from './Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        fontSize: 80,
        color: '#34434D',
        fontWeight: 'bold',
    },
    tituloTwo:{
        fontSize: 50,
        color: '#34434D',
        fontWeight: 'bold',
    },
    subtitulo:{
        fontSize: 18,
        color: 'gray',
    },
    forgotPassword:{
        fontSize: 14,
        color: 'gray',
        marginTop: 14,
        marginLeft: 170
    },
    text:{
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textInput:{
        borderColor: 'gray',
        paddingStart: 30,
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    //logo Imagen
    imageLogo:{
        width: 150,
        height: 150,
        resizeMode: 'cover',
    },
    //Button Gradient
    buttonPrincipal:{
        width: '80%',
        height: 50
    },
    buttonSecund:{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25
    },
    textRegister:{
        color: '#000',
        fontSize: 16,
        marginTop: 75
    },
    textReference:{
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 75,
        marginLeft: 30,
        color: '#5433ff'
    },
    contentRegister:{
        display: 'flex',
        flexDirection: 'row',
    }
})
