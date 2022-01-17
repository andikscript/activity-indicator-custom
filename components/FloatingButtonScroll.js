import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text, FlatList, Image, Dimensions} from 'react-native';

const FloatingButtonScroll = () => {
  const [isShow, setShow] = useState(false);
  const translateShow = useRef(new Animated.Value(70)).current;

  const translate = () => {
    Animated.timing(translateShow, {
      toValue: isShow ? 0 : 70,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translate();
  }, [isShow]);

  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={() => (
          <View
            style={{
              width: Dimensions.get('screen').width,
              height: 200,
              paddingHorizontal: 10,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>andikscript</Text>
          </View>
        )}
        contentContainerStyle={{
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={event => {
          const offset = event.nativeEvent.contentOffset.y;

          if (offset > 50) {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          bottom: 50,
          right: 10,
          transform: [{translateX: translateShow}],
        }}>
        <Image
          source={{
            uri: 'https://www.pngkit.com/png/full/432-4327950_gift-free-vector-icon-designed-by-pixel-buddha.png',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Animated.View>
    </View>
  );
};

export default FloatingButtonScroll;