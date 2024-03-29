import { Box, Button, Heading, Image, Input, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../color'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function LoginScreen({navigation}) {
  return (
    <Box flex={1}>
      <Image flex={1}  alt="Logo" style={{ width: '100%', height: 200 }} source={require("../../assets/cover.png")}/>
      <Box w='full' h='full' position='absolute' top='0' px='6' justifyContent='center'>
        <Heading>LOGIN</Heading>
        <VStack pt='5' space={5}>
          <Input //EMAIL
            InputLeftElement={
              <MaterialIcons name='email' size={20} color={Colors.main}/>
            }
            variant='underlined'
            placeholder='user@gmail.com'
            w='70%'
            pl={2}
            color='green'
            borderBottomColor={Colors.underline}
          />
           <Input //PASSWORD
            InputLeftElement={
              <Ionicons name='eye' size={20} color={Colors.main}/>
            }
            type='password'
            variant='underlined'
            placeholder='***********'
            w='70%'
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button 
        _pressed={{bg: 'lightgreen'}}
        my={30} w='40%' rounded={50} 
        bg={Colors.main}
        onPress={()=> navigation.navigate('Bottom')}
        >
          LOGIN
        </Button>
        <Pressable onPress={()=> navigation.navigate('Register')}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default LoginScreen