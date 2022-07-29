import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import PinchAble from './components/PinchBox/PinchBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <PinchAble></PinchAble>
      <Footer></Footer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flexDirection:'column',
  flex:1
  }
});
