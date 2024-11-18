import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Promocode() {
  return (
    <View>
      
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.titleview}>
          <Text style={styles.title}>Promo Code </Text>
        </View>
        <View style={styles.applyview}>
          <Text style={styles.apply}>Apply</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    height: 70,
    width: "95%",
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginStart: 10,
    marginBottom: 30,
    marginTop: 10,

   




  },
  elevated: {
    backgroundColor: '#fffff',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: 'grey',
  },
  titleview: {},
  title: {
    color: "grey",
    fontWeight: '500',
    fontSize: 22,
    marginLeft:20,
    marginTop:25
    
  },
  apply: {
    color: "white",
    fontWeight: '600',
    textAlign: 'center',
    fontSize:16
    
  },
  applyview: {
    backgroundColor: "#20a7db",
    color: "white",
    width: "33%",
    height: 35,
    borderRadius: 10,
    padding: 7,
    marginLeft:220,
    marginTop:-35
    
    
  }
})