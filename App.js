import HomePage from './screens/HomePage';
import ModulePage from './screens/ModulePage';
import ReadingPage from './screens/ReadingPage';
//To run the project on the web, we need to install the following dependencies that will help to run the project on the web:
//npx expo install react-dom react-native-web @expo/metro-runtime

// For React Navigation 
// npm install @react-navigation/native @react-navigation/native-stack
// For expo: npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Module" component={ModulePage} />
        <Stack.Screen name="Reading" component={ReadingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


