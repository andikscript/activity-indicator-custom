import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text, FlatList, Image, Dimensions} from 'react-native';

const HeaderWindowScroll = () => {
  const distance = useRef(new Animated.Value(0)).current;

  const distanceInterpolate = distance.interpolate({
    inputRange: [0, 50],
    outputRange: [-55, 0],
    extrapolate: 'clamp',
  });

  return (
    <View>
      <View
        style={{
          height: 50,
          backgroundColor: '#2962ff',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 2,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Header
        </Text>
      </View>
      <Animated.FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => (
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: 300,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <Text>andikscript</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: distance,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: 55,
          width: Dimensions.get('screen').width,
          backgroundColor: 'white',
          top: 0,
          transform: [{translateY: distanceInterpolate}],
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 2,
        }}>
        <Text style={{color: '#2962ff', fontSize: 18}}>Beranda</Text>
      </Animated.View>
    </View>
  );
};

export default HeaderWindowScroll;