import React, {Component} from 'react'
import {Provider} from 'react-redux'
import DicePicker from './components/DicePicker'
import NumRollPicker from './components/NumRollPicker'
import ModPicker from './components/ModPicker'
import PickerTitle from './components/PickerTitle'
import Header from './components/Header'
import RollButton from './components/RollButton'
import RollResult from './components/RollResult'
import {StyleSheet, Text, View} from 'react-native'
import configureStore from './config/store'

export default class DnDNdN extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <View style={appStyle.mainView}>
                    <Header/>
                    <PickerTitle text="Number of rolls"/>
                    <NumRollPicker/>
                    <PickerTitle text="Die type"/>
                    <DicePicker/>
                    <PickerTitle text="Modifier"/>
                    <ModPicker/>
                    <RollButton style={appStyle.button}/>
                    <RollResult/>
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
    },
    button: {
        color: "#D5FFE2"
    }
})