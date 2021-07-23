import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../common/config';
import Header from '../components/header';

const PhoneView = (props) => {
    const store = useSelector(state => state)

    const phone = store.selected;

    return (
        <ScrollView style={{ flex: 1 }} testID="detail-page">
            <Header title='Details' showBackButton={true} backAction={() => props.navigation.pop()} />
            <View style={styles.imageContainer}>
                <Text style={styles.name}>{phone.name}</Text>
                <Image source={{ uri: `${SERVER_URL}/images/${phone.imageFileName}` }}
                    resizeMode="contain" style={styles.image}>
                </Image>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.propertyName}>Manufacturer:</Text>
                <Text style={styles.propertyValue}> {phone.manufacturer}</Text>
                <Text style={styles.propertyName}>Description:</Text>
                <Text style={styles.propertyValue}> {phone.description}</Text>
                <Text style={styles.propertyName}>Color:</Text>
                <Text style={styles.propertyValue}> {phone.color}</Text>
                <Text style={styles.propertyName}>Price:</Text>
                <Text style={styles.propertyValue}> {phone.price}</Text>
                <Text style={styles.propertyName}>Screen:</Text>
                <Text style={styles.propertyValue}> {phone.screen}</Text>
                <Text style={styles.propertyName}>Processor:</Text>
                <Text style={styles.propertyValue}> {phone.processor}</Text>
                <Text style={styles.propertyName}>Ram:</Text>
                <Text style={styles.propertyValue}> {phone.ram}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginTop: 10
    },
    imageContainer: {
        flex: 1,
        alignItems:'center',
        marginTop: 10
    },
    detailContainer: {
        margin: 10,
        flex: 1,
    },
    propertyName: {
        fontSize: 15,
        marginLeft: 10,
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    propertyValue: {
        fontSize: 15,
        marginLeft: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    name: {
        fontSize: 26,
        marginLeft: 10,
        fontWeight: 'bold',
        margin: 10,
    }
})
export default PhoneView
