import React, {Component, useEffect, useLayoutEffect, createContext, useState, useContext, useRef} from 'react';
import {View, Text, Button, Animated, LogBox, DrawerLayoutAndroid, Dimensions, TextInput, Image} from 'react-native';
import { CustomColor } from './components/CustomColor';
import { dataShow } from './components/Search/Data';

import {Container, Dna} from './components/Dna';
import { FloatingButton } from './components/FloatingButton';
import { MultipleChoice } from './components/MultipleChoice/MultipleChoice';
import { Search } from './components/Search/Search';
import { Snake } from './components/Snake';
import { BlurEffectBackground } from './components/BlurEffectBackground';
import { BounceImage } from './components/BounceImage';
import { SlideWindow } from './components/SlideWindow';
import SlideShow from './components/SlideShow/SlideShow';
import { dataSlide } from './components/SlideShow/data';
import LoadingDribble from './components/LoadingScreen/LoadingDribble';
import ScrollCampaign from './components/ScrollCampaign/ScrollCampaign';
import data from './components/ScrollCampaign/data';
import HeaderFolding from './components/HeaderFolding/HeaderFolding';
import FloatingButtonScroll from './components/FloatingButtonScroll';
import HeaderWindowScroll from './components/HeaderWindowScroll/HeaderWindowScroll';
import LoadingType from './components/LoadingScreen/LoadingType';
import AnimationTextWelcome from './components/AnimationTextWelcome';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
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

      {/* <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1637170556969-169f43457274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        }}
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}
      />

      <BlurEffectBackground color={'#fff'} /> */}

      {/* <BounceImage uri="https://cdn.kibrispdr.org/data/pin-map-png-0.png" /> */}

      {/* <BounceImage image={require('./src/image/bounce.jpg')} /> */}

      {/* <SlideWindow /> */}
      
      {/* <SlideShow data={dataSlide} /> */}

      {/* <LoadingDribble color={'red'} /> */}
      {/* <ScrollCampaign data={data} distance={75} size={250} /> */}
      {/* <HeaderFolding /> */}
      {/* <FloatingButtonScroll /> */}
      {/* <HeaderWindowScroll /> */}
      {/* <LoadingType sizeLoading={15} /> */}
      <AnimationTextWelcome 
        title={'Hi'} 
        body={'Andik Script'} 
      />
    </View>
  );
};

export default App;