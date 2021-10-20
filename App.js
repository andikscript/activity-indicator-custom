import React, {Component, useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';

import {Atas, Tengah, Bawah} from './components/dnaindicator/ViewBox';

const ActivityIndicatorDna = () => {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setCondition(!condition);
    }, 1800);
  }, [condition]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Container condition={condition} size={50} />
    </View>
  );
};

const Container = ({condition, size}) => {
  return (
    <View
      style={{
        width: size,
        height: size * 2 + 5,
      }}>
      <Atas condition={condition} paddingLeft={size / 10} />
      <Tengah condition={condition} />
      <Bawah condition={condition} paddingLeft={size / 10} />
    </View>
  );
};

export default ActivityIndicatorDna;
