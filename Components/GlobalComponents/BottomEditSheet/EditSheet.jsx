import React,{useRef,useEffect} from 'react'
import { View, Text,Animated,StyleSheet,Dimensions } from 'react-native'
import BottomSheet from "react-native-gesture-bottom-sheet";
const bottomSheetHeight=Dimensions.get('screen').height*.8


const EditSheet = ({data}) => {
    const bottomSheet = useRef();

    useEffect(()=>{
        bottomSheet.current.show()
    },[])



    return (
        <Animated.View>
            <BottomSheet hasDraggableIcon ref={bottomSheet} height={bottomSheetHeight}>
                <Text>Here  am i</Text>
            </BottomSheet>
        </Animated.View>
    )
}

export default EditSheet
