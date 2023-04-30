import React from 'react';
import {View} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './homeScreen';
import CategoriesScreen from './categoriesScreen';
import MapViewScreen from './mapViewScreen';
import AccountScreen from './accountScreen';

const Tab = createMaterialBottomTabNavigator();

const CustomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Acasă"
      activeColor="#00273D"
      inactiveColor="#00273D"
      barStyle={{ backgroundColor: '#D2EBF4', height: 75}}
      shifting={true}
    >
      <Tab.Screen
        name="Acasă"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Acasă',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorii"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Categorii',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hartă"
        component={MapViewScreen}
        options={{
          tabBarLabel: 'Hartă',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cont"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Cont',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomNavigationBar;

