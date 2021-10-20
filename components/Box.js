import React, { Component, useEffect, useLayoutEffect, useState } from "react";
import { View } from "react-native";

export const Box = ({first, second, condition}) => {
    const [back, setBack] = useState('green');
    const [parentHeight, setParentHeight] = useState(0);

    const onLayout = event => {
      const {height} = event.nativeEvent.layout;
      setParentHeight(height)
    }

    useEffect(() => {
      const time = setTimeout(() => {
        setBack('white');
      }, first);
    }, [condition]);

    useEffect(() => {
      const time = setTimeout(() => {
        setBack('green');
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
}