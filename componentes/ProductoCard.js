import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductoCard({
  nombre,
  foto1,
  talle,
  descripcion,
  precio,
  stock,
  _id,
  tipo,
}) {
  const [count, setCount] = React.useState(1);
  const [talleElegido, setTalleElegido] = useState(null)

  //const [reload, setReload] = useState(true)

  const guardarTalle = (event) => {
    console.log("TALLE ELEGIDO ->", event?._targetInst?.memoizedProps?.children);
    setTalleElegido(event?._targetInst?.memoizedProps?.children)
    
    //console.log(nombre)
    //console.log(_id)
    //console.log(stock);
  }

  const agregarAlCarrito = () => {
    if (talleElegido === null){
      Alert.alert("Por favor, elija un talle!")
    } else {   
    let productoAgregado = {
        id: _id,
        nombre: nombre,
        foto: foto1,
        precio: precio,
        stock: stock,
        talle: talleElegido,
        tipo: tipo,
    }
    console.log("producto agregado", productoAgregado);
    Alert.alert(`¡El artículo "${nombre} - talle ${talleElegido}" fue agregado al carrito con éxito!`)


      AsyncStorage.setItem(productoAgregado.tipo, JSON.stringify(productoAgregado)).catch(err => console.log(err))
    
    
  }
}

  return (
    <View id={_id} className="w-full bg-zinc-900 rounded-3xl my-5 p-6">
      <Text className='text-3xl text-center text-yellow-500 my-5 font-light'>{nombre}</Text>
      <View>
        <Image
          source={{ uri: foto1 }}
          className="w-full h-72"
          style={{ resizeMode: "contain", borderRadius: 25 }}
        ></Image>
      </View>
      <View className='flex-row justify-between my-3'>
        <View className='flex-row items-center gap-3'>
      {/* <AntDesign name='minuscircle' size={24} color={colorScheme === 'light' ? 'black' : 'white'}
            onPress={()=> (count <= 1) ? console.log("es 1") : setCount(count-1)}></AntDesign>
          <Text className='text-xl dark:text-white'>{count}</Text>
          <AntDesign name='pluscircle' size={24} color={colorScheme === 'light' ? 'black' : 'white'}
            onPress={()=>setCount(count+1)}></AntDesign> */}
            {talleElegido === 'S'
            ? <TouchableOpacity style={styles.talleS} className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>S</Text>
              </TouchableOpacity>
            : <TouchableOpacity className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>S</Text>
              </TouchableOpacity>
            }
            {talleElegido === 'M'
            ? <TouchableOpacity style={styles.talleM} className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>M</Text>
              </TouchableOpacity>
            : <TouchableOpacity className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>M</Text>
              </TouchableOpacity>
            }
            {talleElegido === 'L'
            ? <TouchableOpacity style={styles.talleL} className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>L</Text>
              </TouchableOpacity>
            : <TouchableOpacity className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>L</Text>
              </TouchableOpacity>
            }
            {talleElegido === 'XL'
            ? <TouchableOpacity style={styles.talleXL} className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>XL</Text>
              </TouchableOpacity>
            : <TouchableOpacity className='flex-row justify-center w-8 self-center bg-yellow-500 dark:bg-white p-1 rounded-full'>
                <Text onPress={guardarTalle} className='text-xl text-black dark:text-black'>XL</Text>
              </TouchableOpacity>
            }
        </View>
        <Text className='text-2xl text-white font-extrabold dark:text-white'>${precio}</Text>
      </View>
      <View className='mt-5'>     
        <Text className='text-lg text-white text-center my-5 font-extralight' numberOfLines={2}>{descripcion}</Text>
        <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-yellow-500 dark:bg-white p-3 rounded-full'>
          <Text onPress={agregarAlCarrito} className='text-black text-base dark:text-black font-medium'>Añadir al carro</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
// style={styles.talleS}
const styles = StyleSheet.create({
  talleS: {
    backgroundColor: 'white',
  },
  talleM: {
    backgroundColor: 'white',
  },
  talleL: {
    backgroundColor: 'white',
  },
  talleXL: {
    backgroundColor: 'white',
  },
})