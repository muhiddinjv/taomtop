import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import Buttone from '../components/Buttone'
import React from 'react'
import Colors from '../color'

const ShippingInputs = [
  {
    label:'ENTER CITY',
    type:'text'
  },{
    label:'ENTER COUNTRY',
    type:'text'
  },{
    label:'ENTER POSTAL CODE',
    type:'number'
  },{
    label:'ENTER ADDRESSW',
    type:'text'
  }
]

function ShippingScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>DELIVERY ADDRESS</Text>
      </Center>
      <Box h='full' bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((data, index)=>(
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize:'12px',
                    fontWeight:'bold'
                  }}
                >
                  {data.label}
                </FormControl.Label>
                <Input 
                  type={data.type}
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  color={Colors.main}
                  py={2}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
          </VStack>
          <Buttone mt={10} bg={Colors.main} color={Colors.white}>
            CONTINUE
          </Buttone>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShippingScreen