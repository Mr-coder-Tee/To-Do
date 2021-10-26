import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {LandingPage,LogIn,SignUp,Homepage} from './Components/index'


const Stack = createStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}>
      <Stack.Screen name ="LangingPage" component={LandingPage}/>
      <Stack.Screen name="LogIn" component={LogIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Home" component={Homepage}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
