import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import React from 'react'
import NavOption from '../component/NavOption';


const Homescreen = () => {
   
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
        style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
        }}
        source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/640px-Uber_logo_2018.svg.png",
        }}
        />
        <NavOption />
      </View>

    </SafeAreaView>
  )
}

export default Homescreen

