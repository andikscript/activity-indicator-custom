import React, {useRef, useState} from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const SlideWindow = () => {
  const height = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const [condition, setCondition] = useState(false);

  const showSlide = () => {
    Animated.timing(height, {
      toValue: 100,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  const hideSlide = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = {
    height: height,
  };

  const rotateIcon = () => {
    rotate.setValue(0);
    Animated.timing(rotate, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          position: 'absolute',
          top: 50,
          width: Dimensions.get('screen').width,
          ...animatedHeight,
          elevation: 5,
        }}>
        <FlatList
          data={[
            '#FF0000',
            '#FF7F00',
            '#FFFF00',
            '#00FF00',
            '#0000FF',
            '#6F00FF',
            '#BF00FF',
          ]}
          renderItem={({item}) => (
            <View
              style={{
                width: 100,
                backgroundColor: item,
                marginEnd: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item}</Text>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            padding: 10,
          }}
          contentContainerStyle={{
            paddingEnd: 10,
          }}
        />
      </Animated.View>
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: 50,
          backgroundColor: '#00b0ff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          elevation: 10,
        }}>
        <Icon name="arrow-left-thick" color={'#fff'} size={25} />
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: '700',
          }}>
          Slide Window
        </Text>
        <TouchableOpacity
          onPress={() => {
            setCondition(!condition);
            rotateIcon();
            condition ? hideSlide() : showSlide();
          }}>
          <Animated.View
            style={{
              transform: [{rotate: rotateInterpolate}],
            }}>
            <Icon
              name={condition ? 'chevron-up-circle' : 'chevron-down-circle'}
              color={'#fff'}
              size={25}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        Slide Window
      </Text>
    </View>
  );
};
