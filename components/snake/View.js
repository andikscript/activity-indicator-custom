import React from "react";
import { View } from "react-native";
import { Box } from "./Box";

export const ViewFlex = ({ one, two, flex, condition, size, color, transisition}) => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: flex,
      }}>
      <Box
        timeFirst={one}
        timeSecond={one + 50}
        size={size}
        color={color}
        transisition={transisition}
      />
      <Box
        timeFirst={one + 50}
        timeSecond={two}
        size={size}
        color={color}
        transisition={transisition}
      />
      <Box
        timeFirst={two}
        timeSecond={two + 50}
        size={size}
        color={color}
        transisition={transisition}
      />
    </View>
  );
};
