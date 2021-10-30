import React, { useState } from "react";
import { View, Text, TouchableOpacity,ScrollView } from "react-native";
import styles from "../LoginPage/styles";
import { Button, Input, Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/index";
import ImageBackgroundView from "../GlobalComponents/ImageBackground/ImageBackgroundView";
import axios from 'axios';
// import {BASE_URL} from '@env'



const SignUp = ({navigation}) => {
  const [isShow, setIsShow] = useState(true);




  const register=(email,password)=>{
      axios.post(' https://06a3-102-252-64-136.ngrok.io/api/register').then(reponse=>{
          console.log(reponse.data)
      }).catch(e=>console.log(e.message))
  }


  const changePasswordViewState = () => {
    setIsShow(!isShow);
  };
  const signupuser=()=>{
      console.log('signed up');
      register('tr@gmail.com','123456878')
  }







  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isShow ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.conatainer}>
      <ScrollView>
      <ImageBackgroundView />
      <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Create an Account</Text>
      <View style={styles.form}>
        <Input
          placeholder="Names"
          leftIcon={<Icon name="user" type="font-awesome" />}
        />
        <Input
          placeholder="Email"
          leftIcon={<Icon name="envelope-o" type="font-awesome" />}
        />
        <Input
          secureTextEntry={isShow}
          placeholder="Password"
          leftIcon={<Icon name="lock" type="font-awesome" />}
          rightIcon={<PassWordViewState />}
        />
        <View style={styles.btnHolder}>
        <Button
            title="Sign up"
            containerStyle={{
              marginTop: 10,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: COLORS.primary
            }}
            buttonStyle={{
              backgroundColor: "transparent"
            }}
            titleStyle={{
              color: COLORS.primary
            }}
            onPress={()=>signupuser()}
          />
        
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={styles.line} />
            <Text style={{ ...FONTS.h4, marginLeft: 5, marginRight: 5 }}>
              or
            </Text>
            <View style={styles.line} />
            
          </View>
          <Button
            title="Log In"
            containerStyle={{
              marginTop: 10,
              backgroundColor: COLORS.primary,
              borderRadius: 20
            }}
            buttonStyle={{
              backgroundColor: COLORS.primary
            }}
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
