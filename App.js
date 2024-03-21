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
import WritingPage from './screens/WritingPage';
import SpeakingPage from './screens/SpeakingPage';
import ExercisePage from './screens/ExercisePage';
import VocabularyPage from './screens/VocabularyPage';
import ListeningPage from './screens/ListeningPage';
import ScoredetalisPage from './screens/ScoredetalisPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Module" component={ModulePage} />
        <Stack.Screen name="Reading" component={ReadingPage} />
        <Stack.Screen name="Writing" component={WritingPage} />
        <Stack.Screen name="Speaking" component={SpeakingPage} />
        <Stack.Screen name="Lestining" component={ListeningPage} />
        <Stack.Screen name="Exercise" component={ExercisePage} />
        <Stack.Screen name="Vocabulary" component={VocabularyPage} />
        <Stack.Screen name="Scoredetails" component={ScoredetalisPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


