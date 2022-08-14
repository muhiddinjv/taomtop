import { Box, Center, ScrollView, Text } from 'native-base'
import Colors from '../color';
import React from 'react'
import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w='full'>
        <Text color={Colors.black} fontSize={20} bold mb={2}>Cart</Text>
      </Center>
      {/* IF CART IS EMPTY
      <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
      </ScrollView>
    </Box>
  )
}

export default CartScreen