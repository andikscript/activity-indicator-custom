import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';
import LoadingType from './LoadingType';

const TypeAndLoading = () => {
  const [isType, setType] = useState('');
  const [isKeyboard, setKeyboard] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboard(true);
    })
    
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(false);
    });

    return () => {
      showKeyboard?.remove();
      hideKeyboard?.remove();
    };

  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* header    */}
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: 50,
          backgroundColor: '#448aff',
          top: 0,
          elevation: 3,
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'white', marginRight: 10}}>
          andikscript
        </Text>
        {
          isKeyboard && <LoadingType sizeLoading={5} colorLoading={'white'} />
        }
      </View>
      {/* footer   */}
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: 50,
          backgroundColor: 'white',
          bottom: 0,
          elevation: 5,
          borderTopWidth: 0.5,
          paddingLeft: 10,
        }}>
        <TextInput
          placeholder="Masukkan Pesan"
          placeholderTextColor={100}
          style={{
            fontSize: 14,
            backgroundColor: 'white',
            color: 'black'
          }}
        />
      </View>
    </View>
  );
}

export default TypeAndLoading;