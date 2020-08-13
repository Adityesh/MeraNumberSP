import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const Country = (props) => {

    const next = () => {
        if(props.errors.country === undefined && props.values.country !== ''){props.setPage(props.page + 1)}
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                multiline
                onChangeText={props.handleChange('country')}
                value={props.values.country}
                placeholder={'Name of the country'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('country')}
            />
            <Text>{props.errors.country}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default Country;