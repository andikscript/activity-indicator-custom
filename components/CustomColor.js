import React, { useEffect, useState } from "react";
import {ActivityIndicator, View} from "react-native";

export const CustomColor = ({activity}) => {
  const [colorIndicator, setColorIndicator] = useState("#d50000");

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator("#aa00ff");
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator("#2962ff");
    }, 2500);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setColorIndicator("#00bfa5");
    }, 4000);
  }, []);

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
