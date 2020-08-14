import React from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import globalStyles from '../styles/globalStyles'
import { Picker } from '@react-native-community/picker'
const categories = [
    {label : "Hair cutting", value : "Hair cutting"},
    {label : "Dentist", value : "Dentist"},
    {label : "X-Ray", value : "X-Ray"},

]


const serviceSchema = yup.object({
    employee_name : yup.string().min(4, "Name cannot be less than 4 characters long").required("Name cannot be empty"),
    employee_email : yup.string().email("Not a valid email-address").required("Email cannot be empty"),
    employee_address : yup.string().min(10, "Address cannot be less than 10 characters").required(),
    employee_phone : yup.number().required("Phone number cannot be empty").typeError("Must be a number"),
    category : yup.string().required("Field cannot be empty"),
    isActive : yup.boolean().required("Cannot be empty")
})


const NewEmployee = ({navigation}) => {

    return(
        <View style={globalStyles.container}>
            <Text>ADD A NEW Employee</Text>
            <Formik
                initialValues = {{employee_name : '', employee_email : '', employee_phone : null, employee_address : '', category : null, isActive : false}}
                validationSchema={serviceSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({handleBlur, handleSubmit, touched, values, errors, handleChange, setFieldValue}) => (
                    <>
                    <View style={globalStyles.textInputView}>
                        <Text>
                            Employee Name :                             
                        </Text>
                        <TextInput placeholder="Enter the name of your service" 
                        value={values.employee_name}
                        onChangeText={handleChange('employee_name')} style={globalStyles.textInput} onBlur={handleBlur('employee_name')}/>
                        <Text style={globalStyles.errorText}>
                           {errors.employee_name}                            
                        </Text>
                    </View>
                    <View style={globalStyles.textInputView}>
                        <Text>
                            Employee Email :                             
                        </Text>
                        <TextInput placeholder="Enter the name of your service" 
                        value={values.employee_email}
                        onChangeText={handleChange('employee_email')} style={globalStyles.textInput} onBlur={handleBlur('employee_email')}/>
                        <Text style={globalStyles.errorText}>
                           {errors.employee_email}                            
                        </Text>
                    </View>

                    <View style={globalStyles.textInputView}>
                        <Text>
                            Employee Phone :                             
                        </Text>
                        <TextInput placeholder="Enter the name of your service" 
                        value={values.employee_phone}
                        onChangeText={handleChange('employee_phone')} style={globalStyles.textInput} onBlur={handleBlur('employee_phone')}/>
                        <Text style={globalStyles.errorText}>
                           {errors.employee_phone}                            
                        </Text>
                    </View>

                    <View style={globalStyles.textInputView}>
                        <Text>
                            Employee Address :                             
                        </Text>
                        <TextInput placeholder="Enter the name of your service" 
                        value={values.employee_address}
                        onChangeText={handleChange('employee_address')} style={globalStyles.textInput} onBlur={handleBlur('employee_address')}/>
                        <Text style={globalStyles.errorText}>
                           {errors.employee_address}                            
                        </Text>
                    </View>

                    <View style={globalStyles.textInputView}>
                        <Text>
                            Services :
                        </Text>
                        <Picker selectedValue={values.category} onValueChange={(value, index) => {setFieldValue('category', value); handleChange('category')}}>
                            
                            {
                                categories.map((item, index) => {
                                    return(
                                        <Picker.Item label={item.label} value={item.value} key={index}/>
                                    )
                                })
                            }
                        </Picker>
                        
                    </View>

                    <View style={globalStyles.textInputView}>
                        <Text>
                            Is Active ? :
                        </Text>
                        <Picker selectedValue={values.isActive} onValueChange={(value, index) => {setFieldValue('isActive', value); handleChange('isActive')}}>
                            <Picker.Item label={"True"} value={true} />
                            <Picker.Item label={"False"} value={false} />
                            
                        </Picker>
                        
                    </View>
                    

                    <Button title={'ADD'} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            
        </View>
    )
}

export default NewEmployee;