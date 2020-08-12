import React from 'react';
import { View, Text, Button} from 'react-native';

const NewService = ({navigation}) => {

    return(
        <View>
            <Text>New Service Page</Text>
            <Button title="Register" onPress={() => {navigation.navigate('Register')}} />
        </View>
    )
}

export default NewService;