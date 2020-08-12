import React from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import globalStyles from '../styles/globalStyles'

const serviceSchema = yup.object({
    service_name : yup.string().required("Field cannot be empty").min(4, 'Name cannot be less than 4 characters'),
    service_description : yup.string().required('Field cannot be empty').min(10, "Must be atleast 10 characters"),
    service_charges : yup.number().required('Field cannot be empty').typeError('Must be a number')
})


const NewService = ({navigation}) => {

    return(
        <View style={globalStyles.container}>
            <Text>ADD A NEW SERVICE</Text>
            <Formik
                initialValues = {{service_name : '', service_description : '', service_charges : ''}}
                validationSchema={serviceSchema}
                onSubmit={(values) => alert(values)}
            >
                {({handleBlur, handleSubmit, touched, values, errors, handleChange}) => (
                    <>
                    <View style={globalStyles.textInputView}>
                        <Text>
                            Service Name :                             
                        </Text>
                        <TextInput placeholder="Enter the name of your service" 
                        value={values.service_name}
                        onChangeText={handleChange('service_name')} style={globalStyles.textInput}/>
                        <Text style={globalStyles.errorText}>
                           {touched.service_name && errors.service_name}                            
                        </Text>
                    </View>
                    <View style={globalStyles.textInputView}>
                    <Text>
                            Service Description :                             
                        </Text>
                        <TextInput placeholder="Describe your service briefly" multiline style={{height : 80}}
                        value={values.service_description}
                        onChangeText={handleChange('service_description')} style={globalStyles.textInput}/>
                        <Text style={globalStyles.errorText}>
                            {touched.service_description && errors.service_description}                             
                        </Text>
                    </View>
                    <View style={globalStyles.textInputView}>
                    <Text>
                            Service Charges :                             
                        </Text>
                        <TextInput placeholder={'Enter charges for your service'} 
                        value={values.service_charges}
                        onChangeText={handleChange('service_charges')} style={globalStyles.textInput}/>
                        <Text style={globalStyles.errorText}>
                            {touched.service_charges && errors.service_charges}                            
                        </Text>
                    </View>

                    <Button title={'ADD'} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            
        </View>
    )
}

export default NewService;