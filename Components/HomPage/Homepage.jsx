import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, ImageBackground } from 'react-native'
import { FAB, Icon, Input } from 'react-native-elements'
import { COLORS, FONTS } from '../../Constants'
import styles from './styles'
import { TodoCard } from '../GlobalComponents/index'

const Homepage = ({navigation}) => {
    const [onBlur, setOnBlur] = useState(false)
    const img = {
        uri: "https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
    };
    return (
        <SafeAreaView style={styles.conatainer}>
            <FAB onPress={()=>navigation.navigate('AddTodo')} placement="right" color={COLORS.primary} icon={<Icon name="plus" type="font-awesome" color={COLORS.White} overlayColor={COLORS.primary} />} />
            <ImageBackground source={img} resizeMode="cover" style={styles.header}>
                <View style={{ paddingLeft: 10, paddingRight: 10, }}>
                    <View style={[styles.searchContainer, onBlur ? { backgroundColor: COLORS.White } : { backgroundColor: 'transparent' }]}>
                        <Icon name="search" type="font-awesome" />
                        <TextInput placeholder="Search task" style={styles.searchInput} onFocus={() => setOnBlur(true)} onBlur={() => setOnBlur(false)} placeholderTextColor={COLORS.Black} />
                    </View>
                </View>
                <View style={styles.dateContainer}>
                    <View style={styles.monthContainer}>
                        <Text style={{ fontSize: 50, color: COLORS.primary, fontWeight: 'bold' }}>16</Text>
                        <View>
                            <Text style={{ fontWeight: "700", color: COLORS.Black }}>August</Text>
                            <Text style={{ fontWeight: "500", color: COLORS.Black }}>2021</Text>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', bottom: 10, right: 20 }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.Black }}>Monday</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{padding:10}}>
                <TodoCard />
            </View>
        </SafeAreaView>
    )
}


// https://dribbble.com/shots/14548073-Airport-Log-in/attachments/6236347?mode=media
// https://dribbble.com/shots/4841953-Redesign-of-Task-Manager
// https://za.pinterest.com/pin/441212094728095534/
// https://www.uistore.design/items/to-do-list-app-freebie/

export default Homepage
