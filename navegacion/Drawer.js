import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
import Registro from '../screens/Registro';
import Ingreso from '../screens/Ingreso';
import Contacto from '../screens/Contacto';
import Carrito from '../screens/Carrito'
import StackNav from './Stack';


const DrawerNav= createDrawerNavigator()


export default function Drawer() {
  

  return (
    <DrawerNav.Navigator>
            <DrawerNav.Screen name='Inicio' component={Home}/>
            {/* <DrawerNav.Screen name='Tienda' component={ListaProductos}/> */}
            <DrawerNav.Screen name='Tienda' component={StackNav}/>
            <DrawerNav.Screen name='Registro' component={Registro}/>
            <DrawerNav.Screen name='Ingreso' component={Ingreso}/>
            <DrawerNav.Screen name='Contacto' component={Contacto}/>
            <DrawerNav.Screen name='Carrito' component={Carrito}/>
    </DrawerNav.Navigator>
  )
}
