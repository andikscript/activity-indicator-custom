import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';

export const BounceImage = ({image, uri}) => {
  const animatedImageBottom = useRef(new Animated.Value(0)).current;

  const animated = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedImageBottom, {
          toValue: 100,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animatedImageBottom, {
          toValue: 0,
          delay: 100,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animated();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Animated.Image
        source={ image ==! null ? 
          image :
          {
            uri: uri,
          }
        }
        style={{
          marginBottom: animatedImageBottom,
          width: 200,
          height: 200,
        }}></Animated.Image>
    </View>
  );
};
