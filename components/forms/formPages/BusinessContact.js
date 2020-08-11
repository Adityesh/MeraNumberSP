import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const BusinessContact = (props) => {

    const next = () => {
        if(props.errors.business_contact_no === undefined) {
            props.setPage(props.page + 1)
        }
        
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <TextInput
                onChangeText={props.handleChange('business_contact_no')}
                value={props.values.business_contact_no}
                placeholder={'Enter the contact number for your business'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('business_contact_no')}

            />
            <Text>{props.errors.business_contact_no}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default BusinessContact;