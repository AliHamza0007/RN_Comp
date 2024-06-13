import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Responsiveui from './Responsiveui';
import CustomModal from './CustomModal';
import {Button, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const React_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'HomePage',
          headerRight: () => <Com />,
          headerTintColor: 'white',
          headerTitleStyle: {fontSize: 40},
          headerStyle: {backgroundColor: 'red'},
        }}>
        <Stack.Screen name="Home" header component={CustomModal} />
        <Stack.Screen
          options={{
            title: 'ResponsivePage',
            headerStyle: {backgroundColor: 'green'},
          }}
          name="Res"
          component={Responsiveui}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Com = () => <Text>Com</Text>;
export default React_Navigation;
