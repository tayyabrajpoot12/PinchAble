import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-paper';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';


export default function Header() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.canceltxt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.savetxt}>Save</Text>
            </TouchableOpacity>

            <View>
                <Image style={styles.img1} source={logo1} />
                <Image style={styles.img2} source={logo2} />
                <Image style={styles.img3} source={logo3} />
                <Image style={styles.img4} source={logo4} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E7D6C6',
        // height: 200,
        elevation:4,     
        flex:2,
        
    },
    cancelBtn: {
        backgroundColor: '#fff',
        top: 40,
        position: 'absolute',
        width: 80,
        height: 40,
        borderRadius: 10,
        left: 20,
    },
    canceltxt: {
        textAlign: 'center',
        marginTop: 8
    },
    savetxt: {
        textAlign: 'center',
        marginTop: 8,
        color: '#fff'
    },
    saveBtn: {
        backgroundColor: '#070707',
        width: 80,
        height: 40,
        borderRadius: 10,
        position: 'absolute',
        left: 250,
        top: 40
    },
    img1:{
        position:'absolute',
        top:100,
        left:10
    },
    img2:{
        position:'absolute',
        top:93,
        left:70
    },
    img3:{
        position:'absolute',
        top:100,
        left:240,
    },
    img4:{
        position:'absolute',
        top:103,
        left:290,
    },
});
