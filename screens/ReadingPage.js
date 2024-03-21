import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import HomePage from './HomePage';
import WritingPage from './WritingPage';
import ListeningPage from './ListeningPage';
import SpeakingPage from './SpeakingPage';
export default function ReadingPage({navigation}) {
  return (
    <Tab.Navigator>
          
             <Tab.Screen name="Writing" component={WritingPage}  
             options={{
                tabBarLabel: 'Writing',
                }}/>
                 <Tab.Screen name="Listening" component={ListeningPage}  
             options={{
                tabBarLabel: 'Listening',
                }}/>
                 <Tab.Screen name="Speaking" component={SpeakingPage}  
             options={{
                tabBarLabel: 'Speaking',
                }}/>
            
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})