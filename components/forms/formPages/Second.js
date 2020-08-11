import React from 'react'
import {TextInput, Button, View} from 'react-native';


const Second = (props) => {


    const next = () => {
        props.setPage(props.page + 1)
    }

    const previous = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput 
            style={{borderWidth : 1}}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                placeholder={'Enter your Password'}
            />

            <Button title='Next Page' onPress={next} />
            <Button title='Previous Page' onPress={previous} />
           
        </View>
    )
}

export default Second;