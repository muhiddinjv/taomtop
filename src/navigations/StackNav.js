import HomeScreen from '../screens/HomeScreen'
import PlaceOrderScreen from '../screens/PlaceOrderScreen'
import PaymentScreen from '../screens/PaymentScreen'
import ShippingScreen from '../screens/ShippingScreen'
import SingleProductScreen from '../screens/SingleProductScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Single' component={SingleProductScreen}/>
        <Stack.Screen name='Shipping' component={ShippingScreen}/>
        <Stack.Screen name='Checkout' component={PaymentScreen}/>
        <Stack.Screen name='Placeorder' component={PlaceOrderScreen}/>
    </Stack.Navigator>
  )
}

export default StackNav