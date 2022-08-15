import { Center, Heading, Image, Text } from 'native-base'
import React from 'react'
import Colors from '../color'
import Tabs from '../components/profile/Tabs'

function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
            <Image alt='user'
              source={require("../../assets/user.png")}
              w={24} h={24} resizeMode='cover'
            />
            <Heading
              bold fontSize={15}
              isTruncated my={2}
              color={Colors.white}
            >Admin Doe</Heading>
            <Text italic fontSize={10} color={Colors.white}>Joined Jul 15, 2022</Text>
        </Center>
        <Tabs />
    </>
  )
}

export default ProfileScreen