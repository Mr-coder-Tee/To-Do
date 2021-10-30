import React,{useState} from "react";
import { View, Text, ImageBackground } from "react-native";
import { Icon, Button } from "react-native-elements";
import styles from "./styles";
import { COLORS, FONTS } from "../../Constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EditSheet } from "../GlobalComponents/index";
const ViewTodo = ({navigation,route}) => {
  const data=route.params
  const [callBottomSheet, setCallBottomSheet] = useState(false);



  const bottomSheetInfo=()=>{
    setCallBottomSheet(!callBottomSheet)
  }












  const img = {
    uri: "https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
  };
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.conatainer}>
      <TouchableOpacity
        style={{marginBottom:30,alignItems:'flex-start'}}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Icon name="angle-left" type="font-awesome" />
      </TouchableOpacity>
      <View style={styles.cardView}>
        <View style={styles.contentContainer}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.circle}/>
            <Text style={{...FONTS.h2,fontWeight:'bold',marginLeft:10,marginRight:10}}>{data.title}</Text>
            <View style={styles.line}/>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginBottom:10,marginTop:10}}>
            <Icon name="calendar" type="font-awesome" />
            <Text style={{marginLeft:10,fontWeight:'bold'}}>3rd fed ,6:45</Text>
          </View>
          <View>
            <Text style={{...FONTS.body3}}>
              {data.desc}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 10
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="check-square-o"
                type="font-awesome"
                color="green"
                style={{ marginLeft: 10 }}
              />
              <TouchableOpacity style={{ marginLeft: 5 }} activeOpacity={0.7}>
                <Text style={{ ...FONTS.h4 }}>Complete</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>bottomSheetInfo()}>
              <Icon name="pencil" type="font-awesome" color="blue" />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Delete"
          icon={
            <Icon
              name="trash"
              type="font-awesome"
              color="white"
              containerStyle={{ marginRight: 10 }}
            />
          }
          containerStyle={{
            marginTop: 10
          }}
          buttonStyle={{
            backgroundColor: COLORS.Danger
          }}
        />
      </View>
      {callBottomSheet && <EditSheet data={data}/>}
    </ImageBackground>
  );
};

export default ViewTodo;
