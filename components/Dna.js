import React, {Component, useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import {Atas, Tengah, Bawah} from './dna/ViewBox';

export const Dna = ({size, colorFirst, ColorSecond, transisition}) => {
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setCondition(!condition);
    }, 1800);
  }, [condition]);

  return (
    <Container
      condition={condition}
      size={size}
      color={condition ? colorFirst : ColorSecond}
      transisition={transisition}
    />
  );
};

export const Container = ({condition, size, color, transisition}) => {
  return (
    <View
      style={{
        width: size,
        height: size * 2 + 5,
      }}>
      <Atas
        condition={condition}
        paddingLeft={size / 10}
        color={color}
        transisition={transisition}
      />
      <Tengah condition={condition} color={color} />
      <Bawah
        condition={condition}
        paddingLeft={size / 10}
        color={color}
        transisition={transisition}
      />
    </View>
  );
};
