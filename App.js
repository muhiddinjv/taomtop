import ProfileScreen from './src/screens/ProfileScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen />
    </NativeBaseProvider>
  );
}
