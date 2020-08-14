import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const State = (props) => {

    const next = () => {
        if(props.errors.state === undefined && props.values.state !== ''){props.setPage(props.page + 1)}
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                multiline
                onChangeText={props.handleChange('state')}
                value={props.values.state}
                placeholder={'Enter the name of your state'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('state')}
            />
            <Text>{props.errors.state}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default State;