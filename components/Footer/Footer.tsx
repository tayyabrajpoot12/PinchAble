import React from 'react';

import { View, Image, StyleSheet  ,TouchableOpacity , Text } from 'react-native';
import crop from '../images/crop.png';
import remove from '../images/remove.png';
import tofront from '../images/tofront.png';
import toback from '../images/toback.png';
import deletePic from '../images/delete.png';




export default function Footer() {




    return (

        <View style={styles.container}>
            <Image style={styles.cropImg} source={crop} />
             <Image style={styles.removeImg} source={remove} />
            <Image style={styles.tofrontImg} source={tofront} />
            <Image style={styles.tobackImg} source={toback} />
            <Image style={styles.deleteImg} source={deletePic} />

            <TouchableOpacity style={styles.cancelBtn}>
                <Text style={styles.canceltxt}>Add Text</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.savetxt}>add Image</Text>
            </TouchableOpacity>


        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FAF9EF',
        elevation:4,
        flex:2
    },
    cropImg:{
        position:'absolute',
        width:50,
        left:10,
        top:1
    },
    removeImg:{
        position:'absolute',
        left:70,
        height:70
    },
    tofrontImg:{
        position:'absolute',
        left:154,
        height:67,
        top:3
    },
    tobackImg:{
        position:'absolute',
        left:225,
        // top:5,
        height:70
    },
    deleteImg:{
        position:'absolute',
        left:300,
        top:1,
        height:70
    },
    cancelBtn: {
        backgroundColor: '#fff',
        top: 90,
        position: 'absolute',
        width: 100,
        height: 60,
        borderRadius: 10,
        left: 70,
    },
    canceltxt: {
        textAlign: 'center',
        marginTop: 18,
        fontWeight:'bold',
    },
    savetxt: {
        textAlign: 'center',
        marginTop: 18,
        fontWeight:'bold'
        
    },
    saveBtn: {
        backgroundColor: '#fff',
        width: 100,
        height: 60,
        borderRadius: 10,
        position: 'absolute',
        left: 200,
        top: 90
    },
})