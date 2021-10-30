import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
  ImageBackground
  
} from "react-native";
import { Input, Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import BottomSheet from "react-native-gesture-bottom-sheet";

import { FONTS, COLORS } from "../../Constants";
import styles from "./styles";

const taskColor = [
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF"
];
const bottomSheetHieght = Dimensions.get("screen").height * 0.1;

const img = {
    uri: "https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
  };






const AddTodo = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState("#FFBF00");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());
  const [dateIsSet, setDateIsSet] = useState(false);
  const bottomSheet = useRef();

  //functions
  const getColor = (myColor) => {
    setColor(myColor);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateIsSet(true);

    // const today=new Date().getTime();
    //   const times=new Date(currentDate).getTime()
    //   const dis=times-today;
    //   const daysleft=Math.floor(dis/(1000*60*60*24));
    //   console.log("======>", daysleft);
  };

  //components
  const BottomSheetDesign = () => (
    <Animated.View>
      <BottomSheet
       hasDraggableIcon ref={bottomSheet} height={bottomSheetHieght}
      >
        <View style={{ flexDirection: "row" }}>
          {taskColor.map((_color) => (
            <View style={styles.box} key={_color}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => getColor(_color)}
              >
                <View
                  style={[styles.circleColor, { backgroundColor: _color }]}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </BottomSheet>
    </Animated.View>
  );
  const DateShow = () => (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
    />
  );

  return (
    <ImageBackground style={styles.container} source={img} resizeMode="cover">
      <TouchableOpacity
        style={{ position: "absolute", top: 0, left: 10 }}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Icon name="angle-left" type="font-awesome" />
      </TouchableOpacity>
      <View style={styles.addCardView}>
        <View style={styles.header}>
          <Text
            style={{
              ...FONTS.h2,
              fontWeight: "bold",
              marginRight: 5,
              marginLeft: 5
            }}
          >
            Create New Tasks
          </Text>
          <View style={styles.line} />
        </View>
        {/* formik */}
        <View style={{ flex: 1, padding: 10 }}>
          <ScrollView >
            <View>
              <Text style={styles.textStyle}>Title</Text>
              <Input placeholder="Write Title" />
            </View>
            <View>
              <Text style={styles.textStyle}>Description</Text>
              <Input placeholder="Write Description" />
            </View>

            <View>
              <Text style={styles.textStyle}>Choose color</Text>
              <View style={styles.box}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => bottomSheet.current.show()}
                >
                  <View
                    style={[styles.circleColor, { backgroundColor: color }]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 10,marginBottom:10 }}>
              <Text style={styles.textStyle}>Choose date and Time</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{ marginRight: 10 }}
                  onPress={() => showDatepicker()}
                >
                  <Icon name="calendar" type="font-awesome" />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => showTimepicker()}
                >
                  <Icon name="clock-o" type="font-awesome" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <Button
            title="Add Task"
            containerStyle={{
              marginTop: 20,
              backgroundColor: COLORS.primary,
              borderRadius: 20
            }}
            buttonStyle={{
              backgroundColor: COLORS.primary
            }}
          />
        </View>
        {/* formik */}
      </View>
      <View>{show && <DateShow />}</View>
      <BottomSheetDesign />
    </ImageBackground>
  );
};

export default AddTodo;
