import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardCarrito from './CardCarrito';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CarritoComponent() {

  const [typeProduct, setTypeProduct] = useState([])
  const [carrito, setCarrito] = useState([])


  /* useEffect(() => {
    AsyncStorage.getItem('buzo')
      .then(data => setCarrito(JSON.parse(data)))
      .catch(err => console.log(err))
  }, []) */

 
  useEffect(()=>{
    AsyncStorage.getAllKeys()
    .then(data=> setTypeProduct(data))
    .catch(err => console.log(err))

    AsyncStorage.getItem('Buzo')
    .then(res => setCarrito(JSON.parse(res)))
    .catch(err => console.log(err))

    AsyncStorage.getItem('RemeraM')
    .then(res => setCarrito(JSON.parse(res)))
    .catch(err => console.log(err))
  },[])

 console.log('Carrito', carrito)

  


  return (
    <View className=' bg-black w-full h-full'>
      <Text className='text-yellow-500 text-center text-3xl mt-8 font-light'>- Carrito -</Text>
      <Text className='text-white text-center text-xl mt-8 font-light'>Bienvenido a tu sección de compras</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>1 - Acá podes checkear tus compras</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>2 - Eliminar un Item que no desees comprar</Text>
      <Text className='text-white text-center text-1xl mt-8 font-light'>3 - Finalizar tu compra exitosamente</Text>
      {carrito.length === 0 ? 
        console.log('array vacio')
        :
        carrito.map(producto => <CardCarrito foto={producto.foto} />)
      }
    </View>
  )
}