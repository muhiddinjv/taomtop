import PlaceOrderScreen from './src/screens/PlaceOrderScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  );
}
