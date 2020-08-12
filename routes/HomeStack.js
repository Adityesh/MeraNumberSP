import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react'
import Home from '../components/Home'
import { Button } from 'react-native'
import NewService from '../components/NewService';

const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            title : 'Home'
        }
        
    },

    NewService : {
        screen : NewService,
        navigationOptions : {
            title : 'Add a New Service'
        }
    }

}



const HomeStack = createDrawerNavigator(screens, {
    defaultNavigationOptions : ({navigation}) => ({
        headerRight : <Button title="Toggle" onPress={() => navigation.toggleDrawer()} />
    })
});

export default HomeStack;