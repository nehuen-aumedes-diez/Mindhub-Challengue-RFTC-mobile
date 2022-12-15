import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native'
import Home from '../screens/Home'
import ListaProductos from '../screens/ListaProductos'

const DrawerNav= createDrawerNavigator()


export default function Drawer() {
  

  return (
    <DrawerNav.Navigator>
            <DrawerNav.Screen name='home1' component={Home}/>
            <DrawerNav.Screen name='Productos' component={ListaProductos}/>
    </DrawerNav.Navigator>
  )
}
