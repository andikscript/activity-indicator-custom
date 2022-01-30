import React, {useRef} from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NotifAnimated = ({textNotif}) => {
  const translate = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;
  const text = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.sequence([
      Animated.timing(translate, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(width, {
        toValue: 1,
        duration: 500,
        delay: 200,
        useNativeDriver: false,
      }),
      Animated.timing(text, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(text, {
        toValue: 0,
        duration: 500,
        delay: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(width, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 300,
        delay: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }

  const showTranslate = translate.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 20],
    extrapolate: 'clamp'
  })

  const showWidth = width.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 120],
    extrapolate: 'clamp'
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => show()}
        style={{
          padding: 10,
          backgroundColor: 'purple',
          borderRadius: 8,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          SHOW NOTIFICATION
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          backgroundColor: 'purple',
          position: 'absolute',
          top: 0,
          transform: [{translateY: showTranslate}],
          borderRadius: 50,
          width: showWidth,
          height: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 5}}>
          <Icon name="shopping" size={20} color={'white'} />
        </View>
        <Animated.Text
          style={{
            color: 'white',
            marginLeft: 5,
            marginRight: 5,
            transform: [{scale: text}],
            fontSize: 12,
            fontWeight: '700',
          }}>
          {`${textNotif.slice(0, 13)}..`}
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

export default NotifAnimated;