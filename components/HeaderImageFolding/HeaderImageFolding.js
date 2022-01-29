import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
} from 'react-native';

const HeaderImageFolding = ({image}) => {
  const scroll = useRef(new Animated.Value(0)).current;
  const height = scroll.interpolate({
    inputRange: [0, 500],
    outputRange: [250, 60],
    extrapolate: 'clamp'
  })

  const opacity = scroll.interpolate({
    inputRange: [0, 650],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View>
        <Animated.Image
          source={{
            uri: image,
          }}
          style={{
            height,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('screen').width,
            backgroundColor: 'blue',
          }}
        />
      </View>
      <Animated.FlatList
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21,
        ]}
        renderItem={({item}) => (
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 50,
              marginBottom: 5,
              marginHorizontal: 5,
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            <Text style={{fontSize: 30, color: 'black'}}>{item}</Text>
          </Animated.View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 5,
          paddingBottom: 5,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scroll,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      />
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#1DA1F2',
          opacity,
          height,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          width: Dimensions.get('screen').width,
        }}>
        <Text style={{color: 'white', fontSize: 17}}>andikscript</Text>
      </Animated.View>
    </View>
  );
}

const Header = ({opacity, height}) => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#1DA1F2',
        height,
        width: Dimensions.get('screen').width,
        opacity,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
      }}>
      <Text style={{color: 'white', fontSize: 17}}>andikscript</Text>
    </Animated.View>
  );
}

export default HeaderImageFolding;