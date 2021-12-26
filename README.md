# React Native Custom
<img src="https://img.shields.io/badge/react-17.0.2-green"> <img src="https://img.shields.io/badge/react%20native-0.66.1-blue"> <img src="https://img.shields.io/badge/activity%20indicator%20dna-1.0.0-red"> 

<img src="https://img.shields.io/badge/npm-v7.24.0-green"> <img src="https://img.shields.io/badge/activity%20indicator%20snake-1.0.0-red"> <img src="https://img.shields.io/badge/License-MIT-blue"> 

<img src="https://img.shields.io/badge/floating%20button-1.0.0-yellow"> <img src="https://img.shields.io/badge/search-1.0.0-green"> <img src="https://img.shields.io/badge/multiple--choice-1.0.0-red"> 

<img src="https://img.shields.io/badge/blur--effect-1.0.0-white">  <img src="https://img.shields.io/badge/bounce--image-1.0.0-pink"> <img src="https://img.shields.io/badge/blur--effect-1.0.0-white"> 

<img src="https://img.shields.io/badge/slide%20window-1.0.0-blue"> <img src="https://img.shields.io/badge/slide%20show-1.0.0-red"> <img src="https://img.shields.io/badge/scroll%20campaign-1.0.0-blue"> 

# Is this ?
My creation custom react native open source for custom

# Preview
<img src="https://user-images.githubusercontent.com/58913447/138280100-a2182105-d6c9-41f1-a272-b0aa0aba5701.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/138280180-d9d56c1a-ac6a-4303-a44a-823ca965bb5e.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/138286149-27ffd58b-2330-40d5-88e2-d4fb413691d4.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/139575348-6f50ccdf-443c-4596-bbad-2a584220eb92.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/139909013-3cdc2f99-48f4-4583-b30f-4a1f48ac7647.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/140117855-244eb5e3-79dd-4bae-b389-b4715f0344fe.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/144160414-037880a0-df4c-466f-8068-22a7bc135190.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/145145789-1e2c009f-8322-48ad-a28c-881531b98edf.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/145592847-fa4600fb-1c14-48c6-867c-c8d34bb27497.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/146672953-bd6ac34b-f959-46d3-a00f-4dc039ae5947.gif" width="250" height="550"/> <img src="https://user-images.githubusercontent.com/58913447/147404656-26cf8fdb-0b30-4121-b8f1-ed099b638072.gif" width="250" height="550"/> 
 
# How to Use 
**Git clone**


```
https://github.com/andikscript/react-native-custom.git
```

And you can use this component by calling the name component directly in the core component.

how to call activity indicator model dna :
```javascript
<Dna
  size={50}
  colorFirst={"red"}
  colorSecond={"blue"}
  transisition={"yellow"}
/>
```
how to call snake model activity indicator :
```javascript
<Snake 
  colorFirst={"blue"}
  colorSecond={"red"}
  transisition={"yellow"}
/>
```
how to call activity indicator custom color :
```javascript
<CustomColor
  activity={true}
  colorFirst={'red'}
  colorSeccond={'blue'}
  colorThird={'green'}
/>
```
how to call Floating Button :
```javascript
<FloatingButton />
```
how to call Search Realtime :
```javascript
<Search data={dataShow} />
```
> For custom *"dataShow"* you can change file on *"/components/Search/Data.js"*

how to call Search Realtime :
```javascript
<MultipleChoice />
```
> For custom *"question"* you can change file on *"/components/MultipleChoice/Question.js"*

how to call BlurEffect Background :
```javascript
<BlurEffectBackground color={'#fff'} />
```
> For custom color you can change hexcode color on color={}

how to call Bounce Image Animated :
```javascript
<BounceImage uri="https://cdn.kibrispdr.org/data/pin-map-png-0.png" />
```
```javascript
<BounceImage image={require('./src/image/bounce.jpg')} />
```

how to call Slide Window :
```javascript
<SlideWindow />
```
> For custom component on Slide Window you can edit on file *"./components/SlideWindows.js"* on Flatlist in Animated.View

how to call Slide Show :
```javascript
<SlideShow data={dataSlide} />
```
> For custom image you can change data json format on *"./component/SlideShow/data.js"*

how to call Scroll Campaign :
```javascript
<ScrollCampaign 
 data={data} 
 distance={75} 
 size={250} />
```
> For custom data you can change file data.js on *"./components/ScrollCampaign/data"*
* props *"distance"* to use determine distance margin left of scroll campaign
* and props *"size"* to use determine the height and width of the scroll campaign

# License
MIT License

Copyright (c) 2021 andikscript

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
