import { Box, Heading, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../components/OrderInfo'
import OrderItem from '../components/OrderItem'
import OrderModel from '../components/OrderModel'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OrderInfo
            title='CUSTOMER'
            subTitle='Admin'
            text='admin@example.com'
            icon={<FontAwesome name='user' size={30} color={Colors.white}/>}
          />
          <OrderInfo
            success
            title='ORDER INFO'
            subTitle='Shipping: Tanzania'
            text='Payment Method: PayPal'
            icon={<FontAwesome5 name='shipping-fast' size={30} color={Colors.white}/>}
          />
          <OrderInfo
            danger
            title='DELIVER TO'
            subTitle='Address:'
            text='Aruza Tz, Ngaramtoni Crater'
            icon={<Ionicons name='location-sharp' size={30} color={Colors.white}/>}
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
        <OrderItem />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  )
}

export default OrderScreen