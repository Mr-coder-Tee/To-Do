import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { FONTS, COLORS, SIZES } from '../../Constants/index'
const lineWidth = Dimensions.get('screen').width * .3
const viewWidth = Dimensions.get('screen').width * .9
const viewHeight = Dimensions.get('screen').height * .5
const boxSize=50
const circleSize=boxSize-10

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCardView: {
    backgroundColor: 'rgba(255,255,255,.4)',
    padding:10,
    height: viewHeight,
    width: viewWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    backgroundColor: COLORS.primary,
    height: 1.5,
    marginTop: 5,
    marginBottom: 5,
    width: lineWidth,
  },
  circleColor:{
    width:circleSize,
    height:circleSize,
    borderRadius:25,
  },
  box:{
    padding:5,
    width:boxSize,
    height:boxSize,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },
  textStyle:{
    fontWeight: 'bold' 
  },
  cancelBtn:{
    padding: 20, 
    backgroundColor: COLORS.Danger,
    justifyContent:'center',
    alignItems:'center'
  }

})

export default styles;