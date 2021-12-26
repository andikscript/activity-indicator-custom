import React from 'react';
import {View, Dimensions, FlatList, Image, StyleSheet} from 'react-native';

const ScrollCampaign = ({data, distance, size}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} height={size} width={size} />}
        snapToInterval={size + 5}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={5000}
        decelerationRate={'fast'}
        horizontal
        contentContainerStyle={{
          paddingStart: distance,
          paddingEnd: Dimensions.get('screen').width - (distance + (size + 5)),
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
      <View
        style={[styles.lineBox, {marginStart: distance, width: size, height: size * 0.2}]}></View>
    </View>
  );
};

const Item = ({item, width, height}) => {
	return (
    <View style={[styles.containerImage, {width, height} ]}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  lineBox: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  containerImage: {
    marginEnd: 5,
  },
  image: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  flatList: {
    backgroundColor: 'white',
    marginTop: 10,
  },
});

export default ScrollCampaign;