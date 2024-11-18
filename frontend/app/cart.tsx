import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cartcard from '@/components/src/generalcomponents/Cartcard'
import Cart from "../components/src/navigation-screen/Cart"

export default function cart() {
  return (
    <View>
      <Cart></Cart>
      <Cartcard></Cartcard>
    </View>
  )
}
