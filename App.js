import OrderScreen from './src/screens/OrderScreen';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <OrderScreen />
    </NativeBaseProvider>
  );
}
