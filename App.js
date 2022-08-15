import PaymentScreen from './src/screens/PaymentScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <PaymentScreen />
    </NativeBaseProvider>
  );
}
