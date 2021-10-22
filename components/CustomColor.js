import React, { useEffect, useState } from "react";
import {ActivityIndicator, View} from "react-native";

export const CustomColor = ({activity, colorFirst, colorSecond, colorThird}) => {
  const [colorIndicator, setColorIndicator] = useState("#d50000");
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator(colorFirst);
    }, 1500);
  }, [condition]);

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator(colorSecond);
    }, 2500);
  }, [condition]);

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator(colorThird);
      setCondition(!condition);
    }, 4000);
  }, [condition]);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        color={colorIndicator}
        size="large"
        animating={activity}
      />
    </View>
  );
};
