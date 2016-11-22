import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default Header = () => (
    <View style={headerStyle.header}>
        <Text style={headerStyle.headerText}>DnDNdN</Text>
    </View>
)

const headerStyle = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#D5FFE2',
        justifyContent: 'center'
    },
    headerText: {
        color: '#FF5552',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 20
    }
})