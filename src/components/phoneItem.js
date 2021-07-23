import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SERVER_URL } from '../common/config';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const iconSize = 30

const PhoneItem = (props) => {
    const { onPress, item } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: `${SERVER_URL}/images/${item.imageFileName}` }}
                        resizeMode="contain" style={styles.image}>
                    </Image>
                </View>
                <Text style={styles.text}>{item.name}</Text>
                <View style={styles.icon}>
                    <Icon name='chevron-right' size={iconSize} color='gray' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    image: {
        height: 72,
        width: 72
    },
    imageContainer: {
        borderColor: 'blue',
        borderWidth: 1,
        padding: 15,
        borderRadius: 70,
    },
    text: {
        fontSize: 24,
        marginLeft: 10
    },
    icon: {
        position: 'absolute',
        right: 10
    }
})

export default PhoneItem
