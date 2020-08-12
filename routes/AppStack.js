import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginRegisterStack from './LoginRegisterStack';
import HomeStack from './HomeStack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const screens = {
    LoginRegister : {
        screen : LoginRegisterStack,
        navigationOptions : {
            headerShown : false
        }
    },

    Home : {
        screen : HomeStack,
        navigationOptions : ({navigation}) => ({
            headerLeft :  () => <Icon name="menu" size={24} color="black" onPress={() => navigation.openDrawer()} />,
            title : ''
        })
    }
}


const AppStack = createStackNavigator(screens);


export default createAppContainer(AppStack);

