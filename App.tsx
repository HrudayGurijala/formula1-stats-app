import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//components


//Screens
import Drivers from './src/screens/Drivers';
import Constructors from './src/screens/Constructors';
import Schedule from './src/screens/Schedule';

//navigation
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Drivers'>
        <Tab.Screen name="Constructors" component={Constructors} options={{title:"Team"}}/>
        <Tab.Screen name="Drivers" component={Drivers} options={{title:"drivers"}}/>
        <Tab.Screen name="Schedule" component={Schedule} options={{title:"Schedule"}}/>

    </Tab.Navigator>
  );
}
export type RootBottomStackParamList = {
  Drivers: undefined;
  Constructors: undefined;
  Schedule: undefined;
}
const Tab = createBottomTabNavigator<RootBottomStackParamList>();


const App = ({navigation}) => {
  return (
    <View>
      <Text>App</Text>
      <Button title='Drivers'
      onPress={() => {
        navigation.navigate('Drivers');
      }}
    />
      <Button title='Constructors'
      onPress={() => {
        navigation.navigate('Constructors');
      }}
    />
      <Button title='Schedule'
      onPress={() => {
        navigation.navigate('Schedule');
      }}
    />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})