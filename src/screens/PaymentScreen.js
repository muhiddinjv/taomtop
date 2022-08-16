import { Box, Center, HStack, Image, ScrollView, Text, VStack } from 'native-base'
import Buttone from '../components/Buttone'
import React from 'react'
import Colors from '../color'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const PaymentMethods = [
  {
    logo: require('../../assets/pay/paypal.png'),
    alt:'paypal',
    icon:'Ionicons'
  },{
    logo: require('../../assets/pay/discover.png'),
    alt:'discover',
    icon:'fontAwesome'
  },{
    logo: require('../../assets/pay/googlepay.png'),
    alt:'googlepay',
    icon:'fontAwesome'
  }
]

function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>PAYMENT METHOD</Text>
      </Center>
      <Box h='full' bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {PaymentMethods.map((data, index)=>(
              <HStack key={index}
              alignItems='center'
              bg={Colors.white}
              px={3} py={1}
              rounded={10}
              justifyContent='space-between'
            >
              <Box>
                <Image
                  source={data.logo}
                  alt={data.alt}
                  resizeMode='contain'
                  w={60} h={50}
                />
              </Box>
              {data.icon === 'Ionicons' 
              ? 
              <Ionicons name='checkmark-circle' size={30} color={Colors.main}/>
              : <FontAwesome name='circle-thin' size={30} color={Colors.main}/>}
            </HStack>
            ))}
          <Buttone onPress={()=> navigation.navigate('Placeorder')} mt={10} bg={Colors.main} color={Colors.white}>
            CONTINUE
          </Buttone>
          <Text italic textAlign='center'>
            Payment method is <Text bold>Paypal</Text> by default
          </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen