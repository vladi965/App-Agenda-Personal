import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { myColors } from '../Styles/Color';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const FavoriteButton = ({active, style}) => {
    return (
        <View style={[styles.btn, style]}>
            <FontAwesome5 style={styles.iconHeart} name="heart" size={20} />
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: myColors.white,
        padding: 4,
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    iconHeart:{
        color: 'grey'
    }
})

export default FavoriteButton;