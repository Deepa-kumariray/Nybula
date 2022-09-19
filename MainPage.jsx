import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function MainPage() {
  return (
    <View style={styles.container} >
      <Text>Welcome</Text>
    </View>
    
  )
  }

const styles= StyleSheet.create({
  container:{
flex:1,
    backgroundColor:"white",
  },
  search:{
    flex:1,
    backgroundColor:'white',
    margin:20,
    height:40,
    borderRadius:10,
  }
})