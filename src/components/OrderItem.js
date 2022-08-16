import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, Center, FlatList, HStack, Image, Pressable, VStack } from 'native-base'
import Colors from '../color'
import products from '../data/Products'

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 3)}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => (
        <Pressable>
        <Box mb={3}>
          <HStack
            alignItems='center'
            bg={Colors.white}
            shadow={1}
            rounded={10}
            overflow='hidden'
          >
            <Center w='25%' bg={Colors.deepGray}>
              <Image source={item.image} alt={item.title} w='full'
              h={24} resizeMode='contain'
              />
            </Center>
            <VStack w='60%' px={2}>
              <Text isTruncated color={Colors.black} bold fontSize={12}>
                {item.title}
              </Text>
              <Text isTruncated color={Colors.lightBlack} mt={2} bold>
                ${item.price}
              </Text>
            </VStack>
            <Center>
              <Button
                bg={Colors.main}
                _pressed={{bg: Colors.main}}
                _text={{color: Colors.white}}
              >5</Button>
            </Center>
          </HStack>
        </Box>
      </Pressable>
      )}
    >
      
    </FlatList>
  )
}

export default OrderItem