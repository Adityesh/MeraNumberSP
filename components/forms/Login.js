import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = ({navigation}) => {
    return (
        <View>
            <Text>
                Login Page Here 
            </Text>
            <Button title="Go to Register Page" onPress={() => navigation.navigate('Register')} />

        </View>
    )
}

export default Login;