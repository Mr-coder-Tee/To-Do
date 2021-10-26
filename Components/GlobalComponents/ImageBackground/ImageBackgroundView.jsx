import React from "react";
import { Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../../Constants/index";
import {
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
  View
} from "react-native";
const TopViewHight = Dimensions.get("screen").height*0.4

const ImageBackgroundView = () => {
  const img = {
    uri: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80"
  };
  return (
    <View
      style={{
        overflow: "hidden",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      }}
    >
      <ImageBackground source={img} resizeMode="cover" style={styles.container}>
        <Icon type="font-awesome" name="tasks" color={COLORS.primary} />
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: "900",
            marginLeft: 5,
            color: COLORS.primary
          }}
        >
          Todo App
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    height: TopViewHight
  }
});
