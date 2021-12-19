import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const SlideShow = ({data}) => {
  const [position, setPosition] = useState(1);
  const [length, setLength] = useState(null);
  const {width, height} = Dimensions.get('screen');

  useEffect(() => {
    setLength(data.length);
  });

  const changePosition = value => {
    setPosition(Math.round((value + width) / width));
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{width, height}}>
            <Image
              source={{uri: item.image}}
              style={{flex: 1}}
              resizeMode="cover"
            />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={event => {
          changePosition(event.nativeEvent.contentOffset.x);
        }}
      />
      <View style={styles.containerPosition}>
        <Text style={styles.position}>
          <Text>{position}</Text>
          <Text>/{length}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    borderRadius: 10,
    flexDirection: 'row',
    bottom: 20,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  position: {
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
});

export default SlideShow;