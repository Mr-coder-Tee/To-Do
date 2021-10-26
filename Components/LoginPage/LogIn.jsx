import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/index";
import styles from "./styles";
import ImageBackgroundView from "../GlobalComponents/ImageBackground/ImageBackgroundView";

const LogIn = ({navigation}) => {
  // usestates
  const [isShow, setIsShow] = useState(true);

  //   functions
  const changePasswordViewState = () => {
    setIsShow(!isShow);
  };
  const authenticate=()=>{
      navigation.navigate('Home')
  }

  //   functional component
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
    <View>
      <ImageBackgroundView />
      <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Welcome Back</Text>
      <View style={styles.form}>
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
        <TouchableOpacity activeOpacity={0.7} style={{ padding: 10 }}>
          <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.btnHolder}>
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
            onPress={()=>authenticate()}
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
            onPress={()=>navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default LogIn;
