import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text, Dimensions, StatusBar, StyleSheet} from 'react-native';

const HeaderFolding = () => {
  const folding = useRef(new Animated.Value(0)).current;
  const [isStatus, setStatus] = useState(false);

  const foldingFirst = folding.interpolate({
    inputRange: [0, 70],
    outputRange: [70, 0],
    extrapolate: 'clamp',
  });

  const radius = folding.interpolate({
    inputRange: [0, 70],
    outputRange: [20, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isStatus ? 'light-content' : 'dark-content'}
        backgroundColor={isStatus ? 'red' : 'white'}
      />
      <View style={styles.header}>
        <Text style={{fontSize: 18, color: 'red'}}>Beranda</Text>
      </View>
      <Animated.View
        style={[
          styles.folding,
          {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            width: Dimensions.get('screen').width,
            top: foldingFirst,
          },
        ]}>
        <Text style={styles.textFolding}>Andik Script</Text>
        <Text style={styles.textCredit}>Credit Card Number :</Text>
        <Text style={styles.numberCard}>6025 1581 0256 0125</Text>
      </Animated.View>
      <View style={styles.containerScroll}>
        <Animated.ScrollView
          style={styles.scroll}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: folding,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
              listener: event => {
                const scroll = event.nativeEvent.contentOffset.y;

                if (scroll > 70) {
                  setStatus(true);
                } else {
                  setStatus(false);
                }
              },
            },
          )}>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
          <Text style={{marginTop: 100}}>transaksi</Text>
        </Animated.ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folding: {
    backgroundColor: 'red',
    height: 180,
    alignItems: 'center',
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  textFolding: {
    fontSize: 18,
    marginTop: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  textCredit: {
    fontSize: 16,
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  numberCard: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  containerScroll: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 160,
  },
  scroll: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    marginTop: 20,
  },
});

export default HeaderFolding;