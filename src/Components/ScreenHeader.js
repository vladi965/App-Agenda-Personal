import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const ScreenHeader = ({mainTitle, secondTitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <Text style={styles.secondTitle}>{secondTitle}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    mainTitle:{
        fontSize: 32,
        fontWeight: 'bold'
    },
    secondTitle:{
        fontSize: 29
    }
})


export default ScreenHeader;