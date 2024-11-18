import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Block() {
  return (
    <View>
      <View style={styles.block}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  block:{
    height:100,
    width:"100%",
  }
})