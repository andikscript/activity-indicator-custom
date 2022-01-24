import React, {useEffect, useRef,} from 'react';
import {View, Animated} from 'react-native';

const AnimationText = ({title, body}) => {
  const fadeTextFirst = useRef(new Animated.Value(0)).current;
  const fadeTextSecond = useRef(new Animated.Value(0)).current;
  const translateTextFirst = useRef(new Animated.Value(0)).current;
  const translateTextSecond = useRef(new Animated.Value(0)).current;

  const AnimationFirst = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeTextFirst, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateTextFirst, {
          toValue: -30,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(),
      Animated.parallel([
        Animated.timing(fadeTextSecond, {
          toValue: 1,
          duration: 1000,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateTextSecond, {
          toValue: -30,
          duration: 500,
          delay: 500,
          useNativeDriver: true,
        }),
      ]).start(),
    ]);
  }

  const AnimationFinal = () => {
    Animated.parallel([
      Animated.timing(fadeTextFirst, {
        toValue: 0,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(fadeTextSecond, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateTextSecond, {
        toValue: -81,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }
  useEffect(() => {
    AnimationFirst();
    setTimeout(() => {
      AnimationFinal();
    }, 1500);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#fff',
      }}>
      <Animated.Text
        style={{
          fontSize: 30,
          opacity: fadeTextFirst,
          transform: [{translateY: translateTextFirst}],
          marginBottom: 10,
          color: '#000',
        }}>
        {title}
      </Animated.Text>
      <Animated.Text
        style={{
          fontSize: 30,
          opacity: fadeTextSecond,
          transform: [{translateY: translateTextSecond}],
          color: '#000',
        }}>
        {body}
      </Animated.Text>
    </View>
  );
};

export default AnimationText;