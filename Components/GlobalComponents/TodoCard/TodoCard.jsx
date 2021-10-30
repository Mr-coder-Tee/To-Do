import React,{useState} from "react";
import { View, Text } from "react-native";
import style from "./styles";
import { Icon } from "react-native-elements";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../../../Constants";

const TodoCard = ({nav,showBottom,getEditTodoData,data}) => {



  const bottomSheetInfo=()=>{

    showBottom();
    getEditTodoData(data);
  }





  const RightSwipe = () => (
    <View style={{ paddingTop: 5, paddingBottom: 5 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: "100%",
          backgroundColor: 'blue',
          width: 80,
          justifyContent: "center"
        }}
        onPress={()=>bottomSheetInfo()}
      >
        <Icon name="pencil" type="font-awesome" color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={RightSwipe} style={{flex:1,}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>nav.navigate('ViewTodo',data)}>
        <View style={style.conatainer}>
          <View style={style.priorityColor} />
          <View style={{ marginLeft: 5 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{...FONTS.h4,fontWeight:'bold'}}>{data.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>10:30</Text>
                <Icon
                  name="check-square-o"
                  type="font-awesome"
                  color="green"
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
            <View>
              <Text numberOfLines={2} ellipsizeMode="tail">
                {data.desc}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default TodoCard;
