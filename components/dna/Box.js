import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

export const Box = ({first, second, condition, color, transisition}) => {
  const [back, setBack] = useState(color);
  const [parentHeight, setParentHeight] = useState(0);

  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setParentHeight(height);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setBack(transisition);
    }, first);
  }, [condition]);

  useEffect(() => {
    const time = setTimeout(() => {
      setBack(color);
    }, second);
  }, [condition]);

  return (
    <View
      onLayout={onLayout}
      style={{
        height: '100%',
        width: parentHeight,
        backgroundColor: back,
        borderRadius: 50,
      }}></View>
  );
};
