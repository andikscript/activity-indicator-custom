import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OverflowMenu = () => {
  const showOverflow = useRef(new Animated.Value(0)).current;
  const widthHeight = useRef(new Animated.Value(0)).current;
  const [isCondition, setCondition] = useState(false);

  const ShowOverflow = () => {
    Animated.timing(showOverflow, {
      toValue: 1,
      duration: 300,
      delay: 250,
      useNativeDriver: false,
    }).start();
  }

  const HideOverflow = () => {
    Animated.timing(showOverflow, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  const ShowWidthHeight = () => {
    Animated.timing(widthHeight, {
      toValue: 175,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  const HideWidthHeight = () => {
    Animated.timing(widthHeight, {
      toValue: 0,
      duration: 300,
      delay: 300,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    if (isCondition) {
      ShowOverflow();
      ShowWidthHeight();
    } else {
      HideOverflow();
      HideWidthHeight();
    }
  }, [isCondition])

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.lefHeader}>
          <Icon name="menu" color={'#fff'} size={25} />
          <Text style={styles.textHeader}>Dashboard</Text>
        </View>
        <TouchableOpacity
          onPress={() => setCondition(!isCondition)}
          style={{
            marginRight: 5,
          }}>
          <Icon name="dots-vertical" color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          styles.boxOverflow,
          {
            height: widthHeight,
            width: widthHeight,
          },
        ]}>
        <Animated.View
          style={{
            transform: [{scale: showOverflow}],
          }}>
          <TouchableOpacity style={styles.menuOverflow}>
            <Icon name="github" color={'#000'} size={20} />
            <Text style={{fontSize: 18, marginLeft: 10, color: '#000'}}>
              Github
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{scale: showOverflow}],
          }}>
          <TouchableOpacity style={styles.menuOverflow}>
            <Icon name="twitter" color={'#1DA1F2'} size={20} />
            <Text style={{fontSize: 18, marginLeft: 10, color: '#1DA1F2'}}>
              Twitter
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            transform: [{scale: showOverflow}],
          }}>
          <TouchableOpacity style={styles.menuOverflow}>
            <Icon name="reddit" color={'red'} size={20} />
            <Text style={{fontSize: 18, marginLeft: 10, color: 'red'}}>
              Reddit
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerHeader: {
    backgroundColor: '#1DA1F2',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 19,
    fontFamily: 'Aesthet Nova Regular',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  menuOverflow: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lefHeader: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  boxOverflow: {
    position: 'absolute',
    top: 35,
    right: 15,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'space-evenly',
    paddingLeft: 15,
  },
});

export default OverflowMenu;