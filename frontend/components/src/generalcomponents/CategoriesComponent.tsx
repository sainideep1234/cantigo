import { ScrollView, StyleSheet, Text, View, ImageBackground,ImageSourcePropType } from 'react-native'
import React from 'react'


interface CategoriesProps {
  name: string;  // name is a string
  image: ImageSourcePropType;  // image should match what ImageBackground expects
}


// const image = require('../image/Burger.jpg')
export default function Categories({name , image }:CategoriesProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.card, styles.elevatedcards]}>
        <ImageBackground style={styles.image} source={image}>
          <Text style={styles.text}>{name}</Text>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {},
  card: {
    height: 100,
    width: 150,
    flex: 1,
    marginLeft:10,
    borderRadius:10,
    overflow: 'hidden',

    margin:6
  },
  elevatedcards: {
    elevation:3,
    shadowColor:"#fffff",
   
  },
  image: {
    height: 100,
    width: '100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  text: {
    fontSize: 25,
    color: "#ffff",
    fontWeight:'900',
    overflow:'visible'

  }



})