import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const ImageSection = () => {

    const image = [
        require('../../images/1.jpg'),
        require('../../images/2.jpg'),
        require('../../images/3.jpg'),
        require('../../images/4.jpg'),
        require('../../images/5.jpg'),
        require('../../images/6.jpg')
    ]
  return (
    <View>
       <SliderBox images={image} autoplay={true} circleLoop={true} />
    </View>
  )
}


export default ImageSection