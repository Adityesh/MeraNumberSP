import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';
const BusinessName = (props) => {

    const next = () => {
        if(props.errors.business_name === undefined) {
            props.setPage(props.page + 1)
        }
        
    }

    return(
        <View>
            <TextInput
                onChangeText={props.handleChange('business_name')}
                value={props.values.business_name}
                placeholder={'Enter the name of your business'}
                style={globalStyles.formInput}
                onBlur={props.handleBlur('business_name')}
            />
            <Text>{props.errors.business_name}</Text>
        <View>
            <Button raised primary text="Next" onPress={next}/>

        </View>
            
        </View>
    )
}

export default BusinessName;