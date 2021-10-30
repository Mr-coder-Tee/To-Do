import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import { FAB, Icon, Input } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants";
import styles from "./styles";
import { TodoCard, EditSheet } from "../GlobalComponents/index";


const dummyData=[{id:1,title:'meeting',desc:'metting ka 12'},{id:2,title:'go home',desc:'leave for home around 9'},{id:3,title:'finish ',desc:'finish full stack project'},{id:4,title:'angular',desc:'statrt angular project'}]



const Homepage = ({ navigation }) => {
  const [onBlur, setOnBlur] = useState(false);
  const [callBottomSheet, setCallBottomSheet] = useState(false);
  const [editTodo,setEditTodo]=useState();



  const getEditTodoData=(_data)=>{
    setEditTodo(_data)
  }
  const showBottom = () => {
    setCallBottomSheet(!callBottomSheet);
  };
  
  

  const img = {
    uri: "https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
  };
  return (
    <SafeAreaView style={styles.conatainer}>
      <FAB
        onPress={() => navigation.navigate("AddTodo")}
        placement="right"
        color={COLORS.primary}
        icon={
          <Icon
            name="plus"
            type="font-awesome"
            color={COLORS.White}
            overlayColor={COLORS.primary}
            style={{ zIndex: 200 }}
          />
        }
      />
      <ImageBackground source={img} resizeMode="cover" style={styles.header}>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View
            style={[
              styles.searchContainer,
              onBlur
                ? { backgroundColor: COLORS.White }
                : { backgroundColor: "transparent" }
            ]}
          >
            <Icon name="search" type="font-awesome" />
            <TextInput
              placeholder="Search task"
              style={styles.searchInput}
              onFocus={() => setOnBlur(true)}
              onBlur={() => setOnBlur(false)}
              placeholderTextColor={COLORS.Black}
            />
          </View>
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.monthContainer}>
            <Text
              style={{
                fontSize: 50,
                color: COLORS.primary,
                fontWeight: "bold"
              }}
            >
              16
            </Text>
            <View>
              <Text style={{ fontWeight: "700", color: COLORS.Black }}>
                August
              </Text>
              <Text style={{ fontWeight: "500", color: COLORS.Black }}>
                2021
              </Text>
            </View>
          </View>
          <View style={{ position: "absolute", bottom: 10, right: 20 }}>
            <Text style={{ ...FONTS.h3, color: COLORS.Black }}>Monday</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{ padding: 10 }}>
              <FlatList 
                data={dummyData}
                keyExtractor={(item)=>`${item.id}`}
                renderItem={({item})=>{
                    return <TodoCard data={item} nav={navigation} showBottom={showBottom} getEditTodoData={getEditTodoData}/>
                }}
              />
      </View>
      {callBottomSheet && <EditSheet data={editTodo}/>}
    </SafeAreaView>
  );
};

// https://dribbble.com/shots/14548073-Airport-Log-in/attachments/6236347?mode=media
// https://dribbble.com/shots/4841953-Redesign-of-Task-Manager
// https://za.pinterest.com/pin/441212094728095534/
// https://www.uistore.design/items/to-do-list-app-freebie/

export default Homepage;
