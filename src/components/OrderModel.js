import React, { useState } from 'react'
import Buttone from './Buttone'
import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from 'native-base'
import Colors from '../color';

const OrdersInfos = [
  {
    title:'Products',
    price: 125.77,
    color: 'black'
  },{
    title:'Shipping',
    price: 34.00,
    color: 'black'
  },{
    title:'Tax',
    price: 23.34,
    color: 'black'
  },{
    title:'Total Amount',
    price: 3458.00,
    color: 'main'
  }
]

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <Buttone
        onPress={()=> setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={()=>setShowModel(false)} size='lg'>
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((data, index)=>(
                <HStack justifyContent='space-between' key={index}>
                <Text fontWeight='medium'>{data.title}</Text>
                <Text color={data.color === 'main' ? Colors.main : Colors.black} bold> ${data.price}</Text>
              </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
                rounded={4}
                w='full' h={45}
                justifyContent='center'
                bg={Colors.paypal}
                _pressed={{bg: Colors.lightBlack}}
                onPress={()=> setShowModel(false)}
            >
                <Image
                    alt='paypal'
                    resizeMode='contain'
                    w='full' h={74}
                    source={require('../../assets/pay/paypal.png')}
                />
            </Pressable>
            <Button
              w='full' h={45} mt={2}
              bg={Colors.main}
              _text={{color: Colors.white}}
              onPress={()=>setShowModel(false)}
              _pressed={{bg: Colors.lightBlack}}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default OrderModel