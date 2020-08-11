import React from 'react'
import {TextInput, Button, View} from 'react-native';


const Third = (props) => {
    const submit = () => {
        console.log(props.values)
    }

    const previous = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput 
            style={{borderWidth : 1}}
                onChangeText={props.handleChange('address')}
                value={props.values.address}
                placeholder={'Enter your address'}
            />

            <Button title='Submit' onPress={submit} />
            <Button title='Previous Page' onPress={previous} />
            
        </View>
    )
}


export default Third;