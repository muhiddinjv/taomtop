import { Box, Button, Center, HStack, ScrollView, Text } from 'native-base'
import Colors from '../color';
import React from 'react'
// import CartEmpty from '../components/CartEmpty';
import CartItems from '../components/CartItems';
import Buttone from '../components/Buttone';

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w='full'>
        <Text color={Colors.black} fontSize={20} bold mb={4}>CART</Text>
      </Center>
      {/* IF CART IS EMPTY
      <CartEmpty /> */}
      {/* CART ITEMS */}
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <CartItems />
        <Center mt={3}>
          <HStack
            rounded={50}
            alignItems='center'
            justifyContent='space-between'
            bg={Colors.white}
            shadow={2}
            w='90%'
            pl={5}
            h={45}
          >
            <Text>Total</Text>
            <Button px={5} 
            h={45} rounded={50} 
            bg={Colors.main}
            _text={{
              color: Colors.white,
              fontWeight:'semibold'
            }}
            _pressed={{bg: Colors.main}}
            >$354</Button>
          </HStack>
        </Center>
        <Center px={5} mt={5} mb={3}>
          <Buttone bg={Colors.main} color={Colors.white}>CHECKOUT</Buttone>
        </Center>
      {/* </ScrollView> */}
    </Box>
  )
}

export default CartScreen