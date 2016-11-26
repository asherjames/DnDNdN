import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class PickerTitle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={pickerTitleStyle.titleContainer}>
                <Text style={pickerTitleStyle.titleText}>{this.props.text}</Text>
            </View>
        )
    }
}

const pickerTitleStyle = StyleSheet.create({
    titleContainer: {
        height: 50,
    },
    titleText: {
        color: '#FF5552',
        fontFamily: 'Bungee-Regular',
        fontSize: 15
    }
})