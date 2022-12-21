import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductoCardGorra({
  nombre,
  foto1,
  talle,
  descripcion,
  precio,
  stock,
  _id,
}) {

  const [talleElegido, setTalleElegido] = useState(null)


  const guardarTalle = (event) => {
    console.log("TALLE ELEGIDO ->", event?._targetInst?.memoizedProps?.children);
    setTalleElegido(event?._targetInst?.memoizedProps?.children)
    //setReload(!reload)
    //console.log(nombre)
    //console.log(_id)
    //console.log(stock);
  }

  const agregarAlCarrito = () => { 
    let productoAgregado = {
        id: _id,
        nombre: nombre,
        foto: foto1,
        precio: precio,
        stock: stock,
    }
    console.log("producto agregado", productoAgregado);
    Alert.alert(`¡El artículo "${nombre}" fue agregado al carrito con éxito!`)
  }

  return (
    <View id={_id} className="w-full bg-red-900 rounded-3xl p-5 my-5">
      <Text className='text-3xl text-[#EEA904] text-center font-semibold dark:text-white/70'>{nombre}</Text>
      <View>
        <Image
          source={{ uri: foto1 }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        ></Image>
      </View>
      <View className='flex-row justify-center my-3'>
        <Text className='text-2xl text-white font-extrabold dark:text-white'>${precio}</Text>
      </View>
      <View className='mt-5'>     
        <Text className='text-base italic text-black/60 dark:text-white/70 text-white' numberOfLines={2}>{descripcion}</Text>
        <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
          <Text onPress={agregarAlCarrito} className='text-white dark:text-black font-bold'>Añadir al carro</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}