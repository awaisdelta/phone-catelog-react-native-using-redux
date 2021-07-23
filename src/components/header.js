import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = (props) => {
    return (
        <View style={styles.container}>
            {
                props.showBackButton && (
                    <TouchableOpacity onPress={props.backAction} testID="header-back-btn">
                        <View style={styles.icon}>
                            <Icon name='chevron-left' size={30} color='gray' />
                        </View>
                    </TouchableOpacity>
                )
            }
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginLeft: 10
    }
})
export default Header
