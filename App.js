import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from './login'
import MainPage from './MainPage'
import SignUp from './SignUp'

export default function App() {
const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="SignUp" component={SignUp} />
     
     <Stack.Screen name="MainPage" component={MainPage}  options={{ headerShown: false }}/>
  
     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

    </Stack.Navigator>
    </NavigationContainer>

  )
}
