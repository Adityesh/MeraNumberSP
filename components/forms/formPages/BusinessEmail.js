import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const BusinessEmail = (props) => {

    const next = () => {
        if(props.errors.business_email === undefined && props.values.business_email !== '') {
            props.setPage(props.page + 1)
        }
        
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                onChangeText={props.handleChange('business_email')}
                value={props.values.business_email}
                placeholder={'Enter the email address of your business'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('business_email')}
                keyboardType={'email-address'}
            />
            <Text>{props.errors.business_email}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default BusinessEmail;