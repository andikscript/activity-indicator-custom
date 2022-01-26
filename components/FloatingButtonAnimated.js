import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text, TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButtonAnimated = ({buttonFirst, buttonSecond, buttonThird}) => {
  const showButton = useRef(new Animated.Value(0)).current;
  const [isCondition, setCondition] = useState(false);

  const ShowButton = () => {
    Animated.timing(showButton, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  }

  const HideButton = () => {
    Animated.timing(showButton, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true
    }).start();
  }

  useEffect(() => {
    if (isCondition) {
      ShowButton();
    } else {
      HideButton();
    }
  }, [isCondition])

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1642756060888-aa5f4bc4d86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
        }}
        style={{
          flex: 1,
        }}
      />
      <View style={styles.boxFloating}>
        <Animated.View
          style={[styles.animatedButton, {transform: [{scale: showButton}]}]}>
          <Icon color="white" name={buttonFirst} size={20} />
        </Animated.View>
        <Animated.View
          style={[styles.animatedButton, {transform: [{scale: showButton}]}]}>
          <Icon color="white" name={buttonSecond} size={20} />
        </Animated.View>
        <Animated.View
          style={[styles.animatedButton, {transform: [{scale: showButton}]}]}>
          <Icon color="white" name={buttonThird} size={20} />
        </Animated.View>
        <TouchableOpacity
          onPress={() => setCondition(!isCondition)}
          style={styles.button}>
          <Icon color="white" name="share" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxFloating: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedButton: {
    width: 35,
    height: 35,
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButtonAnimated;