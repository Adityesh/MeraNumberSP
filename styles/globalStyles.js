
import {StyleSheet, Dimensions} from 'react-native';



const styles = StyleSheet.create({
    textInputView : {
        marginVertical : 10,
        width : '100%'
    },

    textInput : {
        borderWidth : 1,
        borderRadius : 10,
        marginVertical : 5,
        width : '100%',
        alignSelf : 'stretch'
    },

    container : {
        display : 'flex',
        alignItems :'center',
        justifyContent : 'center',
        flexDirection : 'column'
    },

    errorText : {
        color : 'red',
        textAlign : 'center'
    }

})




export default styles;