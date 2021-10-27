import React from 'react'
import { View, Text } from 'react-native'
import style from './styles'
import { Icon } from 'react-native-elements'
import Swipeable from "react-native-gesture-handler/Swipeable";



const TodoCard = () => {



    const RightSwipe=()=>(
        <View>
            <Text>delete</Text>
            <Text>edit</Text>
        </View>
    )



    return (
        <Swipeable renderRightActions={RightSwipe}>
            <View style={style.conatainer}>
                <View style={style.priorityColor} />
                <View style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Meeting</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>10:30</Text>
                            <Icon name="check-square-o" type="font-awesome" color="green" style={{ marginLeft: 10 }} />
                        </View>
                    </View>
                    <View>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, esse?
                        </Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}

export default TodoCard
