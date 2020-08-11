import React from 'react'
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import globalStyles from '../../../styles/globalStyles'
import {Button} from 'react-native-material-ui';

const Description = (props) => {

    const next = () => {
        if(props.errors.building_name === undefined && props.errors.area_name === undefined && props.errors.landmark === undefined && props.errors.pincode === undefined) {
            props.setPage(props.page + 1)

        }
    }

    const back = () => {
        props.setPage(props.page - 1)
    }

    return(
        <View>
            <Text>Business Details</Text>
            <TextInput
                multiline
                onChangeText={props.handleChange('building_name')}
                value={props.values.building_name}
                placeholder={'Name of the building'}
                onBlur={props.handleBlur('building_name')}
            />
            <Text>{props.errors.building_name}</Text>

            <TextInput
                multiline
                onChangeText={props.handleChange('area_name')}
                value={props.values.area_name}
                placeholder={'Name of the area'}
                onBlur={props.handleBlur('area_name')}
            />
            <Text>{props.errors.area_name}</Text>

            <TextInput
                multiline
                onChangeText={props.handleChange('landmark')}
                value={props.values.landmark}
                placeholder={'Landmark for your building'}
                onBlur={props.handleBlur('landmark')}
            />
            <Text>{props.errors.landmark}</Text>

            <TextInput
                multiline
                onChangeText={props.handleChange('pincode')}
                value={props.values.pincode}
                placeholder={'Pincode of your locality'}
                onBlur={props.handleBlur('pincode')}
            />
            <Text>{props.errors.pincode}</Text>

        <View>
            <Button raised primary text="Next" onPress={next}/>
            <Button raised accent text="Back" onPress={back}/>

        </View>
            
        </View>
    )
}

export default Description;