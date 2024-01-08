import { useState, useEffect, useSyncExternalStore } from 'react'
import { View, Text, StyleSheet, } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { api } from "../Services/api";


export function PickerItem(prpos) {

    let moedasItem = prpos.moedas.map((item, index) => {
        return <Picker.item value={item.key} key={index} label={item.key} /> 
    })
    return (
        <Picker 
        selectedValue={prpos.moedaSelecionada}
        onValueChange={ (valor) => prpos.onChange(valor) }
        >
            {moedasItem}
        </Picker>
    );



}