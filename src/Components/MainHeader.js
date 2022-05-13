import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MainHeader = ({title}) =>{
    const insets = useSafeAreaInsets();
    return(
        <SafeAreaView>
            <View style={[styles.container, {marginTop: insets.top}]}>
                <FontAwesome5 style={styles.iconSize} name="bars" onPress={() => {}} />
                <Text style={styles.title}>{title}</Text>
                <FontAwesome5 style={styles.iconSize} name="bell" onPress={() => {}} />
            </View>
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    iconSize:{
        fontSize: 20,
        color: 'grey'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default MainHeader;