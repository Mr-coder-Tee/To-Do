import { StyleSheet,StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES,height} from '../../Constants/index'
const lineWidth=Dimensions.get('screen').width*0.65
const BottomViewHight=Dimensions.get('screen').height/2;

const styles=StyleSheet.create({
  conatainer:{
      flex:1,
      marginTop:StatusBar.currentHeight,
  },
 
  BottomView:{
    height:BottomViewHight,
    borderRadius:30,
    paddingTop:20,

  },
  line:{
    backgroundColor:COLORS.primary,
    height:1.5,
    width:lineWidth,
    marginTop:5,
    marginBottom:5,
  }

})

export default styles;