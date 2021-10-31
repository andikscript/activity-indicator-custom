import React, { Component, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { contextCondition } from "../Snake";

export const Box = ({timeFirst, timeSecond, size, color, transisition}) => {
  const [backgroundColor, setBakcgroundColor] = useState(color);
  const conditionData = useContext(contextCondition);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBakcgroundColor(transisition);
    }, timeFirst);
  }, [conditionData]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBakcgroundColor(color);
    }, timeSecond);
  }, [conditionData]);

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