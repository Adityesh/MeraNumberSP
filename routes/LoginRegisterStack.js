import { createStackNavigator } from 'react-navigation-stack';
import Register from '../components/forms/Register';
import Login from '../components/forms/Login';

const screens = {
    Login : {
        screen : Login,
        navigationOptions : {
            title : 'Login'
        }
    },

    Register :{
        screen : Register,
        navigationOptions : {
            title : 'Register'
        }
    }
}


const LoginRegisterStack = createStackNavigator(screens);


export default LoginRegisterStack