import { StyleSheet, StatusBar,Dimensions } from "react-native";
import { FONTS, COLORS, SIZES } from '../../../Constants/index'
const width = Dimensions.get("screen").width - 30;

const styles = StyleSheet.create({
  conatainer: {
    width: '100%',
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    padding:10,
    flexDirection:'row',
    borderWidth:0,
  },
  priorityColor: {
    backgroundColor: 'red',
    width:2,
    height:'100%'
  }
})

export default styles;