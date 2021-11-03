import React, {Component, useEffect, useLayoutEffect, createContext, useState, useContext, useRef} from 'react';
import {View, Text, Button, Animated, LogBox, DrawerLayoutAndroid, Dimensions, TextInput, Image} from 'react-native';
import { CustomColor } from './components/CustomColor';
import { dataShow } from './components/Search/Data';

import {Container, Dna} from './components/Dna';
import { FloatingButton } from './components/FloatingButton';
import { MultipleChoice } from './components/MultipleChoice/MultipleChoice';
import { Search } from './components/Search/Search';
import { Snake } from './components/Snake';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
      }}>
      {/* <Dna
        size={50}
        colorFirst={'red'}
        ColorSecond={'blue'}
        transisition={"yellow"}
      /> */}
      {/* <Snake 
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

      {/* <FloatingButton /> */}

      {/* <Search data={dataShow} /> */}

      <MultipleChoice />
    </View>
  );
};

export default App;