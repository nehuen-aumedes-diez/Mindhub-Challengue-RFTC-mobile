import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardCarrito from './CardCarrito';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CarritoComponent() {

  const [typeProduct, setTypeProduct] = useState()
  const [buzo, setBuzo] = useState([])
  const [remeraM, setRemeraM] = useState([])
  const [remeraF, setRemeraF] = useState([])

   useEffect(()=>{
    AsyncStorage.getItem('Buzo')
    .then(res => setBuzo(JSON.parse(res)))
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    AsyncStorage.getItem('RemeraM')
    .then(res => setRemeraM(JSON.parse(res)))
    .catch(err => console.log(err))
  },[])

  useEffect(()=>{
    AsyncStorage.getItem('RemeraF')
    .then(res => setRemeraF(JSON.parse(res)))
    .catch(err => console.log(err))
  },[]) 

  return (
    <ScrollView className=' bg-black w-full h-full'>
      <Text className='text-yellow-500 text-center text-3xl mt-8 font-light'>- Carrito -</Text>
      <Text className='text-white text-center text-xl mt-8 font-light'>Bienvenido a tu sección de compras</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>1 - Acá podes checkear tus compras</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>2 - Eliminar un Item que no desees comprar</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>3 - Finalizar tu compra exitosamente</Text>
       {
        buzo === null ?
        console.log('Vacio Buzo')
        :
        <CardCarrito foto={buzo.foto} nombre={buzo.nombre} precio={buzo.precio} tipo={buzo.tipo} evento={()=>AsyncStorage.removeItem('Buzo')} />
      }
      {
        remeraF === null ?
        console.log('Vacio Remeras F')
        :
        <CardCarrito foto={remeraF.foto} nombre={remeraF.nombre} precio={remeraF.precio} tipo={remeraF.tipo} evento={()=>AsyncStorage.removeItem('RemeraF')} />
      }
      {
        remeraM === null ?
        console.log('Vacio Remeras M')
        :
        <CardCarrito foto={remeraM.foto} nombre={remeraM.nombre} precio={remeraM.precio} tipo={remeraM.tipo} evento={()=>AsyncStorage.removeItem('RemeraM')} />
      } 
    </ScrollView>
  )
}