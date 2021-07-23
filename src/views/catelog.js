import React, { useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/header'
import { fetchPhonesList, selectPhone } from '../store/actions/actions'
import PhoneItem from '../components/phoneItem'

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
        <View style={styles.mainContainers}>
            <Header title='Catalog' />
            {
                store.phoneList ?
                    <FlatList
                        data={store.phoneList} keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return <PhoneItem  onPress={onPress} item={item} />
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
    mainContainer: {
        flex: 1
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Catelog
