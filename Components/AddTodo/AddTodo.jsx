import React, { useState } from 'react'
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { Input, BottomSheet, Icon } from 'react-native-elements'
import DateTimePicker from "@react-native-community/datetimepicker";

import { FONTS, COLORS } from '../../Constants'
import styles from './styles'



const taskColor = ['#FFBF00','#FF7F50','#DE3163','#9FE2BF','#40E0D0','#6495ED','#CCCCFF']





const AddTodo = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [color, setColor] = useState('#FFBF00')
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");
    const [date, setDate] = useState(new Date());
    const [dateIsSet, setDateIsSet] = useState(false);
    
    //functions
    const getColor=(myColor)=>{
        setColor(myColor)
        setIsVisible(false)
    }
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
        <BottomSheet isVisible={isVisible} containerStyle={{ height: 100, backgroundColor: 'white' }}>
            <View style={{flexDirection:'row',}}>
                {
                    taskColor.map((_color) => (
                        <View style={styles.box} key={_color}>
                            <TouchableOpacity activeOpacity={.7} onPress={() => getColor(_color)}>
                                <View style={[styles.circleColor,{backgroundColor:_color}]} />
                            </TouchableOpacity>
                        </View>

                    ))
                }
            </View>

            <TouchableOpacity activeOpacity={.7} onPress={() => setIsVisible(false)} style={styles.cancelBtn}>
                <Text >Cancel</Text>
            </TouchableOpacity>
        </BottomSheet>
    )
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
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position:'absolute',top:0,left:10}} activeOpacity={.7} onPress={()=>navigation.goBack()}>

                <Icon name="angle-left" type="font-awesome" />
            </TouchableOpacity>
            <View style={styles.addCardView}>
                <View style={styles.header}>
                    <Text style={{ ...FONTS.h2, fontWeight: 'bold', marginRight: 5, marginLeft: 5 }}>Create New Tasks</Text>
                    <View style={styles.line} />
                </View>
                {/* formik */}
                <View style={{ flex: 1, padding: 10 }}>
                    <ScrollView>
                        <View>
                            <Text style={styles.textStyle}>
                                Title
                            </Text>
                            <Input placeholder="Write Title" />
                        </View>
                        <View>
                            <Text style={styles.textStyle}>
                                Description
                            </Text>
                            <Input placeholder="Write Description" />
                        </View>

                        <View>
                            <Text style={styles.textStyle}>Choose color</Text>
                            <View style={styles.box}>
                                <TouchableOpacity activeOpacity={.7} onPress={() => setIsVisible(true)}>
                                    <View style={[styles.circleColor,{backgroundColor:color}]} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.textStyle}>Choose date and Time</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <TouchableOpacity activeOpacity={.7} style={{ marginRight: 10 }}  onPress={()=>showDatepicker()}>
                                    <Icon name="calendar" type="font-awesome" />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.7} onPress={() => showTimepicker()}>
                                    <Icon name="clock-o" type="font-awesome" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <Button title="Add Task" containerStyle={{
                        marginTop: 10,
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                    }}
                        buttonStyle={{
                            backgroundColor: COLORS.primary,

                        }} />
                </View>
                {/* formik */}
            </View>
            <View>{show && <DateShow />}</View>
            <BottomSheetDesign />
        </SafeAreaView>
    )
}

export default AddTodo
