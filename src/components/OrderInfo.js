import React from 'react'
import { Center, Heading, Text } from 'native-base'
import Colors from '../color'

export default function OrderInfo({icon, title, subTitle, text, success, danger}) {
  return (
    <Center
        bg={Colors.white}
        w={200} 
        py={2}
        rounded={10}
        shadow={4}
        mb={2} 
        ml={5}
        mr={1} 
        px={4}
    >
        <Center
            bg={Colors.main} 
            w={60} h={60}
            rounded='full'
        >{icon}</Center>
        <Heading
            bold isTruncated
            fontSize={12} mt={2} mb={2}
            color={Colors.black}
        >{title}</Heading>
        <Text fontSize={13} color={Colors.black}>{subTitle}</Text>
        <Text fontSize={13} textAlign='center' italic color={Colors.black}>{text}</Text>

        {success && (
            <Center py={2} mt={2} w='full' bg={Colors.blue}>
                <Text fontSize={12} color={Colors.white}
                >Paid on Aug 15, 2022</Text>
            </Center>
        )}
        {danger && (
            <Center py={2} mt={2} w='full' bg={Colors.red}>
                <Text fontSize={12} color={Colors.white}
                >Not delivered</Text>
            </Center>
        )}
    </Center>
  )
}