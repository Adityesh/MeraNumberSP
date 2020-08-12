import React from 'react';
import { View, Text, Button} from 'react-native';

const Home = ({navigation}) => {

    return(
        <View>
            <Text>Home Component</Text>
            <Button title="Register" onPress={() => {navigation.navigate('Register')}} />
        </View>
    )
}

export default Home;