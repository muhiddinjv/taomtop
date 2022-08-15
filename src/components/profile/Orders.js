import { Box, Button, HStack, ScrollView, Text } from 'native-base'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Colors from '../../color'

export default function Orders() {
  return (
    <Box h='full' bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            bg={Colors.deepGray}
            py={5} px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTurnicated>234545654673456</Text>
            <Text fontSize={12} bold color={Colors.black} isTurnicated>PAID</Text>
            <Text fontSize={11} bold color={Colors.black} isTurnicated>Jul 15, 2022</Text>
            <Button
              px={7} py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{color: Colors.white}}
              _pressed={{bg: Colors.main}}
            >$455</Button>
          </HStack>
        </Pressable>

        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            py={5} px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTurnicated>234545654673456</Text>
            <Text fontSize={12} bold color={Colors.black} isTurnicated>NOT PAID</Text>
            <Text fontSize={11} bold color={Colors.black} isTurnicated>Jan 15, 2022</Text>
            <Button
              px={7} py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{color: Colors.white}}
              _pressed={{bg: Colors.red}}
            >$155</Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}