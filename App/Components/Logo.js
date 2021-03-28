import React from 'react';
import { Image, View } from 'react-native';
import { Images, Metrics } from "../Themes";

export default function Logo(props) {
  return (
    <View>
      <Image resizeMode="contain" style={{ width: Metrics.screenWidth *0.6, height: Metrics.screenWidth *0.2}}
      source={Images.logo}/>
    </View>
  )
}
