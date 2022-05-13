import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import LoginScreen from '../Screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
              <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>  
    );
}
