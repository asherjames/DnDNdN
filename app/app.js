import React, {Component} from 'react'
import {Provider} from 'react-redux'
import DicePicker from './components/DicePicker'
import NumRollPicker from './components/NumRollPicker'
import ModPicker from './components/ModPicker'
import Header from './components/Header'
import RollButton from './components/RollButton'
import {StyleSheet, Text, View} from 'react-native'
import configureStore from './config/store'

export default class DnDNdN extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <View style={appStyle.mainView}>
                    <Header/>
                    <NumRollPicker/>
                    <DicePicker/>
                    <ModPicker/>
                    <RollButton style={appStyle.button}/>
                </View>
            </Provider>
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