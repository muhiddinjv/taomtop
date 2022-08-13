// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import NotVerifyScreen from './src/screens/NotVerifyScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <NotVerifyScreen />
    </NativeBaseProvider>
  );
}
