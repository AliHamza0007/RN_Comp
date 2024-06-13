import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ModalCom from './Modal';
import Radio from './DynamicRadio';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Tab_Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Modal" component={ModalCom} />
        <Tab.Screen name="Radio" component={Radio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tab_Navigation;
