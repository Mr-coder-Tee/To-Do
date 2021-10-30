import { StyleSheet,StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES} from '../../Constants/index'
const widthLine=Dimensions.get('screen').width*.5

const styles=StyleSheet.create({
  conatainer:{
      flex:1,
      marginTop:StatusBar.currentHeight,
      padding:20
  },
  cardView:{
    backgroundColor:'rgba(255,255,255,.4)',
    overflow:'hidden'
  },
  contentContainer:{
    padding:10
  },
  circle:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:'green', 
  },
  line:{
    width:widthLine,
    height:1.5,
    backgroundColor:'gray',
    alignItems:'center',
    alignSelf:'center'
    
  },

})

export default styles;