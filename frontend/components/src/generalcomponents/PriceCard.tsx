import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PriceCard() {
  return (
    <View>

      <View style={[styles.card, styles.elevated]}>
        <View style={styles.box}>
          <Text style={styles.right} >cart total</Text>
          <Text style={styles.left} >₹430.00</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.right} >Tax</Text>
          <Text style={styles.left} >₹00.00</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.right} >Delivery</Text>
          <Text style={styles.left} >₹30.00</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.right} >Promo discount</Text>
          <Text style={styles.left} >₹00.00</Text>
        </View>
        <View style={styles.seprator}></View>
        <View style={styles.box}>
          <Text style={styles.right} >Sub Total</Text>
          <Text style={styles.left} >₹460.00</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    height: 250,
    width: "95%",
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginStart: 10,
    marginBottom: 10,

  },
  elevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: 'grey',
  },
  box: {
    flexDirection: 'row',
    // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute space evenly between elements
    padding: 10,

  },
  right: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '700',
    color: "grey"
  },
  left: {
    fontSize: 18,
    fontWeight: '600',
    marginRight:9
  },
  seprator:{
    height:"0.3%",
    width:"90%",
    marginLeft:20,
    backgroundColor:"grey"
  }
})