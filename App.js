import ShippingScreen from './src/screens/ShippingScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <ShippingScreen />
    </NativeBaseProvider>
  );
}
