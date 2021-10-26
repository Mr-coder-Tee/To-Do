import { StyleSheet,StatusBar,Dimensions } from "react-native";
import {FONTS,COLORS,SIZES} from '../../Constants/index'
const height=Dimensions.get('screen').height*.25

const styles=StyleSheet.create({
  conatainer:{
      flex:1,
      marginTop:StatusBar.currentHeight,
  },
  form:{
    padding:10,
  },

  btnHolder:{
    padding:20,
  },
  searchContainer:{

    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    padding:5
  },
  searchInput:{
    padding:5,
    width:'80%',
  },
  dateContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    marginTop:10,
  },
  monthContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  header:{    
    padding:10,
    height:height,
  }

})

export default styles;