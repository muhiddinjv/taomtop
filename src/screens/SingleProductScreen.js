import { Box, Heading, HStack, Image, ScrollView, Spacer, Text } from 'native-base'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import Colors from '../color'
import products from '../data/Products'
import Rating from '../components/Rating'
import Buttone from '../components/Buttone';
import Review from '../components/Review'

const SingleProductScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={products[0].image}
          alt='image'
          w='full'
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          Happy birthday my brother from another mother!
        </Heading>
        <Rating value={4}/>
        <HStack space={2} alignItems='center' my={5}>
          <NumericInput value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            // onChange={null}
            iconStyle={{color: Colors.white}}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {products[0].description}
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen