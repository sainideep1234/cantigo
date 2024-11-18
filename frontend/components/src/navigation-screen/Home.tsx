import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import Categories from '../generalcomponents/Categories'
import MainMenu from '../generalcomponents/MainMenu'
import TextInputCompo from '../generalcomponents/TextInputCompo'

export default function Home() {
  return (
    <View>
      <ScrollView>
        <TextInputCompo></TextInputCompo>
        <Text style={styles.textHeading1}>Category</Text>

        <Categories></Categories>
        <Text style={styles.textHeading}>Today's Special</Text>


        {/* <FancyCard></FancyCard> */}

        <MainMenu></MainMenu>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
    marginStart: 15,
    color: 'black'
  },
  textHeading1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginStart: 15,
  }
})