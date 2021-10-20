import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import { Box } from "./Box";

export const Atas = ({condition, paddingLeft, color}) => {
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
        <Box first={850} second={950} condition={condition} color={color} />
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
        <Box first={1050} second={1150} condition={condition} color={color} />
        <Box first={850} second={950} condition={condition} color={color} />
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
        <Box first={1250} second={1350} condition={condition} color={color} />
        <Box first={1050} second={1150} condition={condition} color={color} />
      </View>

      <View
        style={{
          flex: 0.4,
        }}></View>
    </View>
  );
};

export const Tengah = ({condition, color}) => {
  return (
    <View
      style={{
        flex: 0.9,
        alignItems: 'center',
      }}>
      <Box first={1250} second={1450} condition={condition} color={color} />
    </View>
  );
};

export const Bawah = ({condition, paddingLeft, color}) => {
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
        <Box first={1450} second={1550} condition={condition} color={color} />
        <Box first={1400} second={1500} condition={condition} color={color} />
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
        <Box first={1650} second={1750} condition={condition} color={color} />
        <Box first={1450} second={1550} condition={condition} color={color} />
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
        <Box first={1650} second={1750} condition={condition} color={color} />
      </View>
    </View>
  );
};