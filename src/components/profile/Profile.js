import { View, Text } from 'react-native'
import React from 'react'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Colors from '../../color'

const Inputs = [
  {
    label:'USERNAME',
    type:'text'
  },{
    label:'EMAIL',
    type:'text'
  },{
    label:'PASSWORD',
    type:''
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
                borderWidth={0}
                bg={Colors.subGreen}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg:Colors.subGreen,
                  borderColor:Colors.main,
                  borderWidth:1,
                }}
              />
            </FormControl> 
          ))}
        </VStack>
      </ScrollView>
    </Box>
  )
}