import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Homescreen from './screens/Homescreen';
import { store } from './Store';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator>
      <Stack.Screen 
      name="HomeScreen" 
      component={Homescreen}
      options={{
        headerShown:false,
      }}
      />
            <Stack.Screen 
      name="HomeScreen" 
      component={MapScreen}
      options={{
        headerShown:false,
      }}
      />
      </Stack.Navigator>
      {/* <Homescreen /> */}
      </SafeAreaProvider>      
    </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
