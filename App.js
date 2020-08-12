/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import globalStyles from './styles/globalStyles'
import AppStack from './routes/AppStack'
import Form from './components/forms/Register'


const App = () => {
  return(
    
      <AppStack />
    
  )
}


export default App;
