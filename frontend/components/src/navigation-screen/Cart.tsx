import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import OrderList from '../generalcomponents/OrderList'
import Promocode from '../generalcomponents/Promocode'
import PriceCard from '../generalcomponents/PriceCard'
import Buttonplace from '../generalcomponents/Buttonplace'
import Block from '../generalcomponents/Block'





export default function About() {
  return (
    <View>
      <ScrollView>
        <Text style={styles.heading}>Your Food cart</Text>
        <OrderList></OrderList>
        <Promocode ></Promocode>
        <PriceCard></PriceCard>
        <Buttonplace></Buttonplace>
        <Block></Block>
       
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 10,
    marginBottom: 10,
  },

})