import { Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'
import Orders from './Orders'
import Profile from './Profile'
import Colors from '../../color'

const renderScene = SceneMap({
    first: Profile,
    second: Orders
})

const Tabs = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key:'first',
            title:'PROFILE'
        },{
            key:'second',
            title:'ORDERS'
        }
    ])

    const renderTabsBar = (props) => (
        <TabBar 
            {...props}
            tabStyle={styles.tabStyle}
            indicatorStyle={{backgroundColor:Colors.blue}}
            activeColor={Colors.main}
            inactiveColor={Colors.white}
            renderLabel={({route, color})=> (
                <Text style={{color, ...styles.text}}>{route.title}</Text>
            )}
        />
    )
  return (
    <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor:'green'
    },
    text:{
        fontSize:13,
        fontWeight:'bold'
    }
})

export default Tabs