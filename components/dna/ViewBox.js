import React from 'react';
import {View} from 'react-native';
import {Box} from './Box';

export const Atas = ({condition, paddingLeft, color, transisition}) => {
  return (
    <View
      style={{
        flex: 3,
      }}>
      <View
        style={{
          flex: 0.8,
          paddingLeft: paddingLeft,
        }}>
        <Box
          first={850}
          second={900}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>

      <View
        style={{
          flex: 1.1,
        }}></View>

      <View
        style={{
          flex: 1.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Box
          first={950}
          second={1000}
          condition={condition}
          color={color}
          transisition={transisition}
        />
        <Box
          first={850}
          second={900}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>

      <View
        style={{
          flex: 0.9,
        }}></View>

      <View
        style={{
          flex: 1.3,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Box
          first={1050}
          second={1100}
          condition={condition}
          color={color}
          transisition={transisition}
        />
        <Box
          first={1000}
          second={1050}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>

      <View
        style={{
          flex: 0.4,
        }}></View>
    </View>
  );
};

export const Tengah = ({condition, color, transisition}) => {
  return (
    <View
      style={{
        flex: 0.9,
        alignItems: 'center',
      }}>
      <Box
        first={1100}
        second={1150}
        condition={condition}
        color={color}
        transisition={transisition}
      />
    </View>
  );
};

export const Bawah = ({condition, paddingLeft, color, transisition}) => {
  return (
    <View
      style={{
        flex: 3,
      }}>
      <View
        style={{
          flex: 0.4,
        }}></View>
      <View
        style={{
          flex: 1.3,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Box
          first={1450}
          second={1500}
          condition={condition}
          color={color}
          transisition={transisition}
        />
        <Box
          first={1400}
          second={1450}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>

      <View
        style={{
          flex: 0.9,
        }}></View>

      <View
        style={{
          flex: 1.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Box
          first={1550}
          second={1600}
          condition={condition}
          color={color}
          transisition={transisition}
        />
        <Box
          first={1500}
          second={1550}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>
      <View
        style={{
          flex: 1.1,
        }}></View>
      <View
        style={{
          flex: 0.8,
          paddingRight: paddingLeft,
          alignItems: 'flex-end',
        }}>
        <Box
          first={1600}
          second={1650}
          condition={condition}
          color={color}
          transisition={transisition}
        />
      </View>
    </View>
  );
};
