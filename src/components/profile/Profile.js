import { View, Text } from 'react-native'
import React from 'react'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Colors from '../../color'
import Buttone from '../Buttone'

const Inputs = [
  {
    label:'USERNAME',
    type:'text'
  },{
    label:'EMAIL',
    type:'text'
  },{
    label:'PASSWORD',
    type:'password'
  },{
    label:'CONFIRM PASSWORD',
    type:'password'
  }
]

export default function Profile() {
  return (
    <Box h='full' bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10} >
          {Inputs.map((i, index)=>(
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize:'12px',
                  fontWeight:'bold'
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input 
                type={i.type}
                borderWidth={0.3}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg:Colors.subGreen,
                  borderWidth:1,
                  borderColor:Colors.main
                }}
              />
            </FormControl> 
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}