import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native'
import Home from '../screens/Home'
import ListaProductos from '../screens/ListaProductos'
import Registro from '../screens/Registro';
import Ingreso from '../screens/Ingreso';
import Contacto from '../screens/Contacto';


const DrawerNav= createDrawerNavigator()


export default function Drawer() {
  

  return (
    <DrawerNav.Navigator>
            <DrawerNav.Screen name='Inicio' component={Home}/>
            <DrawerNav.Screen name='Tienda' component={ListaProductos}/>
            <DrawerNav.Screen name='Registro' component={Registro}/>
            <DrawerNav.Screen name='Ingreso' component={Ingreso}/>
            <DrawerNav.Screen name='Contacto' component={Contacto}/>
    </DrawerNav.Navigator>
  )
}
