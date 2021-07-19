import React, { useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SERVER_URL } from '../common/config'
import Header from '../components/header'
import { fetchPhonesList, selectPhone } from '../store/actions/actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Catelog = (props) => {

    const dispatch = useDispatch()

    const store = useSelector(state => state)

    useEffect(() => {
        fetchPhonesList(dispatch)
    }, [])

    const onPress = (item) => {
        dispatch(selectPhone(item));
        props.navigation.navigate("itemView");
    }

    return (
        <View style={{flex:1}}>
            <Header title='Catalog' />
            {
                store.phoneList ?
                    <FlatList
                        data={store.phoneList} keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => onPress(item)}>
                                    <View style={styles.container}>
                                        <View style={styles.imageContainer}>
                                            <Image source={{ uri: `${SERVER_URL}/images/${item.imageFileName}` }}
                                                resizeMode="contain" style={styles.image}>
                                            </Image>
                                        </View>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <View style={styles.icon}>
                                            <Icon name='chevron-right' size={30} color='gray' />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    :
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size='large' color='blue' />
                        <Text>Fetching records</Text>
                    </View>
            }
        </View>
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
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Catelog
