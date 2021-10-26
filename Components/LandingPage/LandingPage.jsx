import React from "react";
import { Text, View, SafeAreaView, ImageBackground ,Dimensions} from "react-native";
import { Button } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/index";
import styles from "./styles";
import ImageBackgroundView from "../GlobalComponents/ImageBackground/ImageBackgroundView";
const ButtonSize=Dimensions.get('screen').width-50;





const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.conatainer}>
      <ImageBackgroundView />
      <View style={styles.BottomView}>
        <Text style={{ ...FONTS.h2, fontWeight: "bold", marginLeft: 15 }}>
          Priority Manager
        </Text>
        <View style={styles.line} />
        <Text style={{ marginLeft: 30, fontStyle: "italic" }}>
          Keeping you in touch with what to-do!
        </Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
          <Button
            title="Log In"
            containerStyle={{ marginTop: 10, backgroundColor: COLORS.primary ,borderRadius:20,width:ButtonSize}}
            buttonStyle={{
              backgroundColor: COLORS.primary,
            }}
            onPress={()=>navigation.navigate('LogIn')}
          />
          <Button
            title="Sign up"
            containerStyle={{ marginTop: 10,borderRadius:20,width:ButtonSize,borderWidth:2,borderColor:COLORS.Black}}
            buttonStyle={{
              backgroundColor: 'transparent',
            }}
            titleStyle={{
                color:COLORS.Black
            }}
            onPress={()=>navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
