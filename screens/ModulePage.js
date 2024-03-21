import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// npx expo install react-native-pager-view 
// npm install @react-navigation/material-top-tabs react-native-tab-view

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab = createBottomTabNavigator();
import ReadingPage from './ReadingPage';
import HomePage from './HomePage';
import WritingPage from './WritingPage';
import ListeningPage from './ListeningPage';
import SpeakingPage from './SpeakingPage';



export default function ModulePage(props) {
    return (
        // <View>
        //     <Text>ttigkghjh</Text>
        // </View>
        <Tab.Navigator>
           {/* <Tab.Screen name="Reading" component={ReadingPage}  
             options={{
                tabBarLabel: 'Reading',
                }}/> */}
             <Tab.Screen name="Writing" component={WritingPage}  
             options={{
                tabBarLabel: 'Writing',
                }}/>
                 <Tab.Screen name="Listening" component={ListeningPage}  
             options={{
                tabBarLabel: 'Listenig',
                }}/>
                 <Tab.Screen name="Speaking" component={SpeakingPage}  
             options={{
                tabBarLabel: 'Speaking',
                }}/>
            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})