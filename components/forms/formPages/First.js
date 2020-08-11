import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const First = (props) => {

    const next = () => {
        props.setPage(props.page + 1)
    }

    return(
        <View>
            <TextInput
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                placeholder={'Enter your email'}
                style={globalStyles.formInput}
            />
        <View>
            <Button raised primary text="Next" onPress={next}/>

        </View>
            
        </View>
    )
}

export default First;