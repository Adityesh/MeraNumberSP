import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const Description = (props) => {

    const next = () => {
        props.setPage(props.page + 1)
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                multiline
                onChangeText={props.handleChange('short_description')}
                value={props.values.short_description}
                placeholder={'Briefly describe your business'}
                style={globalStyles.formInput}
            />
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default Description;