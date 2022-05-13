import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../Styles/GlobalStyles';

export default function ButtonRegister () {
    return(
        <TouchableOpacity style={styles.buttonPrincipal}>
            <LinearGradient
                 // Button Linear Gradient
                colors={['#5433ff','#20bdff']}
                start={{x:1, y:0 }}
                end={{x:0, y:1}}
                style={styles.buttonSecund}
                >
                <Text style={styles.text}>Registrar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}