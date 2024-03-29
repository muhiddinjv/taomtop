import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import React, { useState } from 'react'
import Rating from './Rating'
import Message from './Notifications/Message';
import Buttone from './Buttone'
import Colors from '../color';

const Review = () => {
  const [ratings, setRatings] = useState('');

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message 
        color={Colors.main}
        bg={Colors.deepGray}
        children={"NO REVIEW"}
      /> */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Alisher Usmonov
        </Heading>
        <Rating value={4}/>
        <Text mb={3}>Aug 13, 2022</Text>
        <Message 
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "NativeBase Icons was designed to make integration of icons in native base projects easier"
          }
        />
      </Box>

      {/* WRITE REVIEW */}
      {/* <Box mt={6}>
          <Heading fontSize={15} bold mb={4}>
            REVIEW THIS PRODUCT
          </Heading>
          <VStack space={6}>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize:'12px',
                  fontWeight:'bold'
                }}
              >
                Rating
              </FormControl.Label>
              <Select
                bg={Colors.subGreen}
                borderWidth={0}
                rounded={5}
                py={4}
                placeholder='Choose Rate'
                _selectedItem={{
                  bg: Colors.subGreen,
                  endIcon: <CheckIcon size={5} />
                }}
                selectedValue={ratings}
                onValueChange={(e)=> setRatings(e)}
              >
                <Select.Item label='1 - Poor' value='1'/>
                <Select.Item label='2 - Fair' value='2'/>
                <Select.Item label='3 - Good' value='3'/>
              </Select>
            </FormControl>
            <FormControl>
            <FormControl.Label
                _text={{
                  fontSize:'12px',
                  fontWeight:'bold'
                }}
              >
                Comment
              </FormControl.Label>
              <TextArea 
                h={24}
                w='full'
                placeholder='This product is good...'
                borderWidth={0}
                bg={Colors.subGreen}
                py={4}
                _focus={{
                  bg: Colors.subGreen,
                }}
              />
            </FormControl>
            <Buttone bg={Colors.main} color={Colors.white}>
              SUBMIT
            </Buttone>
            <Message 
              color={Colors.white}
              bg={Colors.black}
              children={"Please 'Login' to write a review"}/>
          </VStack>
      </Box> */}
    </Box>
  )
}

export default Review