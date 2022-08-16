import React, { useState } from 'react'
import Buttone from './Buttone'
import { Button, Center, HStack, Modal, Text, VStack } from 'native-base'
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';

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

const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <Buttone
        onPress={()=> setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
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
            <Button
              flex={1} h={45}
              bg={Colors.main}
              _text={{color: Colors.white}}
              onPress={()=>{
                navigation.navigate('Order')
                setShowModel(false)
              }}
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

export default PlaceOrderModel