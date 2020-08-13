import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const City = (props) => {

    const next = () => {
        if(props.errors.city === undefined && props.values.city !== ''){props.setPage(props.page + 1)}
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                multiline
                onChangeText={props.handleChange('city')}
                value={props.values.city}
                placeholder={'Enter the name of your city'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('city')}
            />
            <Text>{props.errors.city}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default City;