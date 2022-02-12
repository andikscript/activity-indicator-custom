import React, {useRef} from 'react';
import {View, Animated, TouchableOpacity, Image, Dimensions} from 'react-native';

const ZoomImage = ({src}) => {
  const zoom = useRef(new Animated.Value(0)).current;
  const image = useRef(new Animated.Value(0)).current;
  const border = useRef(new Animated.Value(1000)).current;

  const zoomImage = () => {
    Animated.sequence([
      Animated.timing(zoom, {
        toValue: 1,
        duration: 1,
        useNativeDriver: true,
      }),
      Animated.timing(image, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(border, {
        toValue: 0,
        duration: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }

  const outImage = () => {
    Animated.sequence([
      Animated.timing(border, {
        toValue: 1000,
        duration: 10,
        useNativeDriver: true,
      }),
      Animated.timing(image, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(zoom, {
        toValue: 0,
        duration: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }

  const translate = zoom.interpolate({
    inputRange: [0,1],
    outputRange: [-1000, 0]
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => zoomImage()}>
        <Image
          source={{
            uri: src
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <Animated.View
        style={{
          position: 'absolute',
          backgroundColor: 100,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          transform: [{translateY: translate}],
        }}>
        <TouchableOpacity
          onPress={() => outImage()}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.Image
            source={{
              uri: src
            }}
            style={{
              width: 250,
              height: 250,
              transform: [{scale: image}],
              borderRadius: border
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default ZoomImage;