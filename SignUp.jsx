import { StatusBar } from 'expo-status-bar';
import React, { useState ,useContext} from 'react';
import {  StyleSheet, Text, TextInput, View,Pressable,Image, ScrollView,SafeAreaView } from 'react-native';

export default function SignUp({ navigation }) {
  
  function submit() {
    console.log("email id ",EmailId,"password",Password)
  }

//   function register(){
//     fetch('http://localhost:3000/register',
//     {
//     method:"POST",
//     headers:{
//     'Content-type':'application/json',
//   },
//   body: JSON.stringify( {
//   EmailId,
//   Password
//   })
// })
//   }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const [, setCredentials] = useContext(CredentialsContext);
  const hello=()=>{
    alert("registration successful")
navigation.navigate('MainPage')
  }
  const register = (e) => {
    // e.preventDefault();
    fetch(`http://192.168.1.8:3000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(() => {
        setCredentials({
          username,
          password,
        });
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (

    <SafeAreaView>    
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
      <Image source='https://media.istockphoto.com/vectors/vector-illustration-register-now-speech-bubble-label-vector-id1303860322?k=20&m=1303860322&s=612x612&w=0&h=NNHlX8Q70qgc4Jcn-urDs5L1VhXwjaJWz_ypdxzNRc4=' style={{width: 350, height: 350}}/>
      <TextInput style={styles.login} placeholder='Enter your Email'  onChangeText={(password)=>setUsername(password)}/>
      
      <TextInput secureTextEntry={true} onChangeText={(password)=>setPassword(password)}
        style={styles.login} placeholder='Password'  />
      <Pressable style={styles.button} onPress={()=>{
        register(),hello()
      }}>
      <Text style={styles.text}>SignUp</Text>
    </Pressable>
    
    <Pressable style={styles.signup} onPress={()=>navigation.navigate('Login')} >
      <Text>Already have Account Click here </Text>  
    </Pressable>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {

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
  marginTop:25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
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
    marginBottom:130,
    color:'gray'
  },
  scrollview:{
  }
});
