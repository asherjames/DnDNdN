import React, {Component} from 'react'
import DicePicker from './components/DicePicker'
import Header from './components/Header'
import RollButton from './components/RollButton'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class DnDNdN extends Component {
    render() {
        return (
            <View style={appStyle.mainView}>
                <Header/>
                <DicePicker/>
                <RollButton style={appStyle.button}/>
            </View>
        );
    }
}

const appStyle = StyleSheet.create({
    mainView: {
        backgroundColor: "#420100",
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    button: {
        color: "#D5FFE2"
    }
})