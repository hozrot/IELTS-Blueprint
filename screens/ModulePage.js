import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// npx expo install react-native-pager-view 
// npm install @react-navigation/material-top-tabs react-native-tab-view
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReadingPage from './ReadingPage';
import HomePage from './HomePage';

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();
export default function ModulePage({ navigation }) {
    return (
        // <View>
        //     <Text>ttigkghjh</Text>
        // </View>
        <Tab.Navigator>
           <Tab.Screen name="Home" component={ReadingPage}  
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="mosque" color={'blue'} size={35} />
                ),
                }}/>
             <Tab.Screen name="Home" component={ReadingPage}  
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="mosque" color={'blue'} size={35} />
                ),
                }}/> <Tab.Screen name="Home" component={ReadingPage}  
                options={{
                   tabBarLabel: 'Home',
                   tabBarIcon: ({ color, size }) => (
                       <MaterialCommunityIcons name="mosque" color={'blue'} size={35} />
                   ),
                   }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})