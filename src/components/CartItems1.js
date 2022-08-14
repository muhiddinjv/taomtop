import React, {useState} from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import { FontAwesome } from '@expo/vector-icons';
import { Box, Center, HStack, Image, Pressable, Text, VStack } from 'native-base'
import products from '../data/Products';
import Colors from '../color';

console.log('products :>> ', products);

const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={0}
        data={products.slice(0,2)}
        renderItem={renderitem}
        renderHiddenItem={hiddenItem}
        showsVerticalScrollIndicator={false}
    />
)

// Cart Item
const renderitem = (data) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems='center' 
                bg={Colors.white} 
                shadow={1} 
                rounded={10} 
                overflow='hidden'>
                <Center w='25%' bg={Colors.deepGray}>
                    <Image
                    source={item.image}
                    alt={item.title}
                    w='full'
                    h={24}
                    resizeMode='contain'
                    />
                </Center>
                <VStack w='60%' px={2} space={2}>
                    <Text isTruncated color={Colors.black} fontSize={10}>
                        {item.title}
                    </Text>
                    <Text>${item.price}</Text>
                </VStack>
            </HStack>
        </Box>
    </Pressable>
}

// Hidden
const hiddenItem = data => {
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto' justifyContent='center' bg={Colors.red}>
        <Center alignItems='center' space={2}>
            <FontAwesome name='trash' size={24} color={Colors.white}/>
        </Center>
    </Pressable>
}

const CartIterms = () => {
    // const [listData, setListData] = useState(Array(20).fill('').map((_, i) => ({
    //     key: `${i}`,
    //     text: `item #${i}`
    //   })));
    //   console.log('listData', listData)
  return (
    <Box mr={6}>
        <Swiper />
    </Box>
  )
}

export default CartIterms