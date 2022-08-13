import { Box, Center, Text } from 'native-base'
import Colors from '../color';
import React from 'react'

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w='full' py={5}>
        <Text
          color={Colors.black} fontSize={20} bold
        >Cart</Text>
      </Center>
    </Box>
  )
}

export default CartScreen