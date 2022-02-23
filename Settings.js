import React, {useState} from 'react';
import set from './images/set.png';
import { View, Image, Text, StyleSheet, backgroundColor, Button, Alert,TextInput, DevSettings } from 'react-native';

export default function Settings({FontSize,changeSize}) {
    

    return(
        <View>
        <View style={styles.container}>
            <Image 
            //The image from the URI only actually shows when 
            //i set a up here
               style={{width: 50, height: 50}}
               source= {set}
            /> 
            <Text style={styles.title}>Settings</Text>
            
        </View>

        <Text style={[styles.text,{fontSize: FontSize}]}>Font Size Sample</Text>
        <Button onPress={changeSize} title="Change Font Size"/>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign:'center'
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'grey' 
    },
    textcontainer:{
        textAlign: 'center',
        paddingTop: 10
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
        fontSize:25
    },
    subtitle: {
        fontFamily: 'Ubuntu-Regular',
        paddingTop: 5
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300',
        textAlign: 'center'
    }
});