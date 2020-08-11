import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import globalStyles from '../../styles/globalStyles'
import { Formik } from 'formik';


import BusinessName from './formPages/BusinessName';
import BusinessEmail from './formPages/BusinessEmail';
import BusinessContact from './formPages/BusinessContact';
import BusinessDetails from './formPages/BusinessDetails';
import City from './formPages/City';
import State from './formPages/State';
import Country from './formPages/Country';
import Confirm from './formPages/Confirm';
import * as yup from 'yup';

const registerSchema = yup.object({
    business_name : yup.string().required("Field cannot be empty").min(4, "Business name cannot be less than 4 characters").typeError("Business Name must be a string"),
    business_email : yup.string().email("Enter a valid email").required("Field cannot be empty"),
    business_contact_no : yup.number("Enter a valid phone number").required("Field cannot be empty").typeError("Contact number cannot contain letters"),
    short_description : yup.string().required("Field cannot be empty").min(10, "Description cannot be less than 10 characters").max(100, "Description cannot be more than 100 characters").typeError("Description must be a string"),
    building_name : yup.string().required("Field cannot be empty").min(4, "Building name cannot be less than 4 characters").typeError("Business Name must be a string"),
    area_name : yup.string().required("Field cannot be empty").min(4, "Area name cannot be less than 4 characters").typeError("Business Name must be a string"),
    city : yup.string().required("Field cannot be empty").typeError("City must be a string"),
    state : yup.string().required("Field cannot be empty").typeError("State must be a string"),
    pincode : yup.number().required("Field cannot be empty").typeError("Pincode cannot contain letters"),
    landmark : yup.string().required("Field cannot be empty").typeError("Landmark must be a string"),
    country : yup.string().required("Field cannot be empty").typeError("Country must be a string")

})

const Form = () => {

    const [page, setPage] = useState(1);

    return(
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            

            <Formik
                initialValues={{business_name : '', business_contact_no: '', business_email : '', short_description : '', building_name: '', area_name : '', city : '', state : '', country : '', pincode : '', landmark  : ''}}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
            >

                {({handleChange, handleBlur, handleSubmit, values, touched, errors, resetForm}) => {
                        switch(page) {
                            case 1:
                                return(
                                <BusinessName 
                                        handleChange={handleChange} 
                                        handleSubmit={handleSubmit} 
                                        handleBlur={handleBlur}
                                        values={values} 
                                        page={page}
                                        setPage={setPage}
                                        errors={errors}
                                        touched={touched}
                                        />)
                            
                            case 2:
                                return(
                                 <BusinessEmail
                                        handleChange={handleChange} 
                                        handleSubmit={handleSubmit} 
                                        values={values} 
                                        page={page}
                                        setPage={setPage} 
                                        errors={errors}
                                        touched={touched}
                                        handleBlur={handleBlur}

                                       />)
                            case 3:
                                return(<BusinessContact
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}

                                   />)

                            case 4:
                                return(<BusinessDetails
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}

                                   />)

                            case 5:
                                return(<City
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}

                                   />)

                            case 6:
                                return(<State
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}

                                   />)

                            case 7:
                                return(<Country
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}

                                   />)
                            case 8:
                                return(<Confirm
                                    handleChange={handleChange} 
                                    handleSubmit={handleSubmit} 
                                    values={values} 
                                    page={page}
                                    setPage={setPage}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}
                                    resetForm = {resetForm}
                                   />)
                                 
                        }

                        
                    }}

                    

            </Formik>
        </View>
    )
}



export default Form;