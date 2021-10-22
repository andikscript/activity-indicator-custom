import React, {Component, useEffect, useLayoutEffect, useState} from 'react';
import {View} from 'react-native';
import { CustomColor } from './components/CustomColor';

import {Container, Dna} from './components/Dna';
import { Snake } from './components/Snake';

const ActivityIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* <Dna
        size={50}
        colorFirst={'red'}
        ColorSecond={'blue'}
        transisition={"yellow"}
      />
      <Snake 
        colorFirst={"blue"}
        colorSecond={"red"}
        transisition={"yellow"}
      /> */}
      {/* <CustomColor
        activity={true}
        colorFirst={'#aa00ff'}
        colorSeccond={'#2962ff'}
        colorThird={'#00bfa5'}
      /> */}
    </View>
  );
};

export default ActivityIndicator;
