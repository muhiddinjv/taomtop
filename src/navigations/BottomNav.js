import { StyleSheet, Text } from 'react-native'
import React from 'react'
import StackNav from '../navigations/StackNav'
import ProfileScreen from '../screens/ProfileScreen'
import CartScreen from '../screens/CartScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Center, Pressable } from 'native-base';
import {Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../color';

const Tab = createBottomTabNavigator();
const CustomTab = ({children, onPress}) => (
    <Pressable
        _pressed={{bg: Colors.lightBlack}}
        onPress={onPress}
        h={70} w={70}
        rounded='full'
        bg={Colors.main}
        shadow={2}
        top={-30}
        
    >
        {children}
    </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
        backBehavior='Main'
        initialRouteName='Main'
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true
        }}
    >
        <Tab.Screen
            name='Main'
            component={StackNav}
            options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <Entypo name='home' size={24} color={Colors.main} />
                        ) : (
                            <AntDesign name='home' size={24} color={Colors.black} />
                        )}
                    </Center>
                )
            }}
        />

        {/* cart */}
        <Tab.Screen
            name='Cart'
            component={CartScreen}
            options={{
                tabBarButton:(props) => <CustomTab {...props}/>,
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome5 name='shopping-basket' size={24} color={Colors.white} />
                        ) : (
                            <MaterialCommunityIcons name='shopping-outline' size={24} color={Colors.white} />
                        )}
                    </Center>
                )
            }}
        />

        {/* profile */}
        <Tab.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
                tabBarIcon:({focused}) => (
                    <Center>
                        {focused ? (
                            <FontAwesome name='user' size={24} color={Colors.main} />
                        ) : (
                            <AntDesign name='user' size={24} color={Colors.blue} />
                        )}
                    </Center>
                )
            }}
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
    }
})

export default BottomNav