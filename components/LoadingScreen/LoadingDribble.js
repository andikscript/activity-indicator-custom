import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const LoadingDribble = ({color}) => {
  const animationLeft = useRef(new Animated.Value(0)).current;
  const animationCenter = useRef(new Animated.Value(0)).current;
  const animationRight = useRef(new Animated.Value(0)).current;
  const toValue = 30;

  const animatedLeft = () => {
    Animated.sequence([
      Animated.timing(animationLeft, {
        toValue: toValue,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(animationLeft, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const animatedCenter = () => {
    Animated.sequence([
      Animated.timing(animationCenter, {
        toValue: toValue,
        duration: 250,
        delay: 250,
        useNativeDriver: false,
      }),
      Animated.timing(animationCenter, {
        toValue: 0,
        duration: 250,
        delay: 50,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const animatedRight = () => {
    Animated.sequence([
      Animated.timing(animationRight, {
        toValue: toValue,
        duration: 250,
        delay: 450,
        useNativeDriver: false,
      }),
      Animated.timing(animationRight, {
        toValue: 0,
        duration: 250,
        delay: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };
  useEffect(() => {
    animatedLeft();
    animatedCenter();
    animatedRight();
    setInterval(() => {
      animatedLeft();
      animatedCenter();
      animatedRight();
    }, 1400);
  });

  return (
    <View style={styles.container}>
      <View style={styles.boxLoading}>
        {/* left */}
        <Animated.View
          style={[
            styles.loading,
            {marginBottom: animationLeft, backgroundColor: color},
          ]}
        />
        {/* center */}
        <Animated.View
          style={[
            styles.loading,
            {
              marginBottom: animationCenter,
              marginHorizontal: 5,
              backgroundColor: color,
            },
          ]}
        />
        {/* right */}
        <Animated.View
          style={[
            styles.loading,
            {marginBottom: animationRight, backgroundColor: color},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxLoading: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  loading: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export default LoadingDribble;
