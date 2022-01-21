import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';

const LoadingType = ({sizeLoading}) => {
    const size = sizeLoading;
    const color = '#2962ff';
    const value = 1.4;
    const timing = 100;
    const loadFirst = useRef(new Animated.Value(1)).current;
    const loadSecond = useRef(new Animated.Value(1)).current;
    const loadThird = useRef(new Animated.Value(1)).current;

    const animatedFirst = () => {
      Animated.sequence([
        Animated.timing(loadFirst, {
          toValue: value,
          duration: timing,
          useNativeDriver: true,
        }),
        Animated.timing(loadFirst, {
          toValue: 1,
          duration: timing,
          useNativeDriver: true,
        }),
      ]).start();
    }

    const animatedSecond = () => {
      Animated.sequence([
        Animated.timing(loadSecond, {
          toValue: value,
          duration: timing,
          delay: 100,
          useNativeDriver: true,
        }),
        Animated.timing(loadSecond, {
          toValue: 1,
          duration: timing,
          delay: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }

    const animatedThird = () => {
      Animated.sequence([
        Animated.timing(loadThird, {
          toValue: value,
          duration: timing,
          delay: 300,
          useNativeDriver: true,
        }),
        Animated.timing(loadThird, {
          toValue: 1,
          duration: timing,
          delay: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }

    useEffect(() => {
        animatedFirst();
        animatedSecond();
        animatedThird();
        setInterval(() => {
          animatedFirst();
          animatedSecond();
          animatedThird();
        }, 700)
    })

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Animated.View
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: 50,
              transform: [{scale: loadFirst}],
            }}
          />
          <Animated.View
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              marginHorizontal: size / 3,
              borderRadius: 50,
              transform: [{scale: loadSecond}],
            }}
          />
          <Animated.View
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: 50,
              transform: [{scale: loadThird}],
            }}
          />
        </View>
      </View>
    );
}

export default LoadingType;