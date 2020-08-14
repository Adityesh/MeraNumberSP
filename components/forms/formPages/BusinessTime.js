import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

import { Picker } from '@react-native-community/picker';

const times = [
    "00:00","01:00","02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
]
const BusinessTime = (props) => {

    const next = () => {
        if((props.errors.opening_time === undefined && props.values.opening_time !== '') && (props.errors.closing_time === undefined && props.values.closing_time !== '')) {
            
            props.setPage(props.page + 1)
        } 
        
    }

    const back = () => {
        props.setPage(props.page - 1);
        console.log(times)
    }

    return(
        <View>
            <View style={{width : '100%'}}>
            <Text>Opening Time :</Text>
            <Picker
            
                selectedValue={props.values.opening_time} 
                onValueChange={(value, index) => {props.setFieldValue('opening_time', value); props.handleChange('opening_time')}}       
            >
                {times.map((value, index) => {
                    return <Picker.Item value={value} label={value} key={index} />
                })}
            </Picker>
            <Text>{props.errors.opening_time}</Text>
            </View>
            <View>
            <Text>Closing Time :</Text>
            <Picker 
                selectedValue={props.values.closing_time} 
                onValueChange={(value, index) => {props.setFieldValue('closing_time', value); props.handleChange('closing_time')}}       
            >
                {times.map((value, index) => {
                    return <Picker.Item value={value} label={value} key={index} />
                })}
            </Picker>
            <Text>{props.errors.closing_time}</Text>
            </View>
            

        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised primary text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default BusinessTime;