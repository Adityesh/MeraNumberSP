import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const Confirm = (props) => {

    const handleSubmit = () => {
        console.log(props.values)
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <Text>Register your Business?</Text>
        <View>
            
            <Button raised primary text="Yes" onPress={handleSubmit}/>
            <Button raised accent text="Go Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default Confirm;