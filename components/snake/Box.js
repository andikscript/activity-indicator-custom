import React, { Component, useEffect, useState } from "react";
import { View } from "react-native";

export const Box = ({timeFirst, timeSecond, condition, size, color, transisition}) => {
  const [backgroundColor, setBakcgroundColor] = useState(color);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBakcgroundColor(transisition);
    }, timeFirst);
  }, [condition]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBakcgroundColor(color);
    }, timeSecond);
  }, [condition]);

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: backgroundColor,
        borderRadius: 100,
      }}
    ></View>
  );
};