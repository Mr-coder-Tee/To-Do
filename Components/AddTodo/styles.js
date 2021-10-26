import { StyleSheet,StatusBar } from "react-native";
import {FONTS,COLORS,SIZES} from '../../Constants/index'

const styles=StyleSheet.create({
  conatainer:{
      flex:1,
      marginTop:StatusBar.currentHeight,
  }

})

export default styles;