import React, {useEffect, useState} from 'react';
import {View, Dimensions, AppState, Image} from 'react-native';

export const BlurEffectBackground = ({color}) => {
  const [foregroundColor, setForegroundColor] = useState('transparent');

  useEffect(() => {
    const change = AppState.addEventListener('change', () => {
      if (AppState.currentState === 'active') {
        setForegroundColor('transparent');
      } else {
        setForegroundColor(color);
      }
    });

    return () => {
      change.remove();
    };
  });

  return (
    <View
    style={{
        flex: 1,
        backgroundColor: foregroundColor,
        position: 'absolute',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        elevation: 1,
    }} />
  );
};