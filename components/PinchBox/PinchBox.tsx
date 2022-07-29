import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import {
  PinchGestureHandlerGestureEvent,
  PinchGestureHandlerStateChangeEvent,
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';
import Abc from '../images/screen.jpg'
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const PinchAble = () => {


  const pinchScale = new Animated.Value(1);
  const baseScale = new Animated.Value(1);
  let lastScale = 1;
  let scale = Animated.multiply(baseScale, pinchScale);

  const USE_NATIVE_DRIVER = true;

  // const PinchHandler = (event: any) => { 


  // }
  const { width, height } = Dimensions.get('window');

  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });

  const savedScale = useSharedValue(1);
  


  const onPinchHandlerState = (event: { nativeEvent: { oldState: any; scale: number; }; }) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

  return (
    <GestureHandlerRootView>
      <PinchGestureHandler
        // onGestureEvent={PinchHandler}
        onHandlerStateChange={onPinchHandlerState}>
        <View style={styles.container} collapsable={false}>
          <Animated.Image
            style={[
              styles.pinchImage,
              {
                transform: [{ perspective: 200 }, { scale: scale }],
              },
               
            ]}
            source={Abc}
          />
        </View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  )

}

export default PinchAble;

const styles = StyleSheet.create({
  container: {
     
  },

  pinchImage: {
    width: 400,
    height:300,
  }
})