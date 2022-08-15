import React, { useState } from 'react';
import { Box, Text, Pressable, Icon, HStack, Center, Image, VStack, Button } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import products from '../data/Products';
import Colors from '../color';

export default function SwipeList() {
  const [listData, setListData ] = useState(products)

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({
    item,
    index
  }) => <Box>
      <Pressable 
      onPress={() => console.log('You touched me')} 
      _pressed={{
      bg: 'trueGray.200'
    }}>
        <Box py={1}>
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
            <VStack  px={2} space={2}>
              <Text color={Colors.black} fontSize={10} w={220} isTruncated>
                  {item.title}
              </Text>
              <Text>${item.price}</Text>
            </VStack>
            <Center>
              <Button
                bg={Colors.main}
                _pressed={{bg: Colors.main}}
                _text={{color: Colors.white}}
              >5</Button>
            </Center>
          </HStack>
        </Box>
      </Pressable>
    </Box>;

  const renderHiddenItem = (data, rowMap) => <HStack flex={1} mt={1} mb={1} ml='auto'>
      <Pressable px={4} cursor="pointer" bg="dark.500" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
        opacity: 0.5
      }}>
        <Icon as={<Ionicons name="close" />} color="white" />
      </Pressable>
      <Pressable px={4} roundedTopRight={10} roundedBottomRight={10} cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
      opacity: 0.5
    }}>
        <Icon as={<MaterialIcons name="delete" />} color="white" />
      </Pressable>
    </HStack>;

  return <Box flex={1} px={2}>
    <SwipeListView data={listData} 
        showsVerticalScrollIndicator={false}
        renderItem={renderItem} 
        renderHiddenItem={renderHiddenItem} 
        rightOpenValue={-100} 
        previewRowKey={'0'} 
        previewOpenValue={-40} 
        previewOpenDelay={0} 
        onRowDidOpen={onRowDidOpen} />
  </Box>
}
    