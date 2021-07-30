/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native';
import CarItem from './src/components/CarItem';

const App = () => {
  return (
    <View style={styles.container}>
      
      <CarItem
        name={'Model X'}
        tagLine={'Order Online For'}
        tagLineCTA={'Touchless Delivery'}
        image={require('./src/assets/images/ModelX.jpeg')}
      />
 
      <StatusBar style='auto'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;
