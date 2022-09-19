import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, TextInput, View,Pressable,Image, ScrollView,SafeAreaView } from 'react-native';

export default function Login({navigation}) {
  const [save, setsave] = useState("Login")
 
  return (

    <SafeAreaView>    
      <ScrollView style={styles.scrollview}>
    <View style={styles.container}>
      <Image source='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' style={{width: 350, height: 350}}/>

      <TextInput style={styles.login} placeholder='username'/>
      <TextInput secureTextEntry={true} style={styles.login} placeholder='password'/>
      <Pressable style={styles.button} 
      
      onPress={() =>
navigation.navigate('MainPage')

      }
    
>      
      <Text style={styles.text}>{save}</Text>
    </Pressable>
    <Pressable style={styles.signup} onPress={()=>navigation.navigate('SignUp')}>
      <Text>Create your account</Text>
    </Pressable>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
alignSelf: "stretch",

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    textAlign:'center',
    width:'85%',
    backgroundColor:'#F4F6F6',
    height:50,
    borderRadius:20,
    color:'black',
    marginVertical:15,
  },

 button: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#088F8F',
    width:'80%',
  
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },
  signup:{
    paddingTop:50,

    marginBottom:80,
    color:'gray'
  },
  scrollview:{
  }
});
