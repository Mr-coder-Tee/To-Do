import { StyleSheet,StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES} from '../../Constants/index'
const width=Dimensions.get('screen').width*.4

const styles=StyleSheet.create({
  conatainer:{
      flex:1,
      marginTop:StatusBar.currentHeight,
  },
  form:{
    padding:10,
  },
  line:{
    width:width,
    height:1.5,
    backgroundColor:COLORS.primary
    
  },
  btnHolder:{
    padding:20,
  }

})

export default styles;