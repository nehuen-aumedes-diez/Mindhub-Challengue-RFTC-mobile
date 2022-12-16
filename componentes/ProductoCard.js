import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductoCard({
  nombre,
  foto1,
  talle,
  descripcion,
  precio,
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-red-900 rounded-3xl p-5 my-5">
        <Text className='text-lg font-semibold dark:text-white/70'>{nombre}</Text>
      <View>
        <Image
          source={{ uri: foto1 }}
          className="w-full h-72"
          style={{ resizeMode: "contain" }}
        ></Image>
      </View>
      <View className='flex-row justify-between my-3'>
      <View className='flex-row items-center gap-3'>
        <AntDesign name='minuscircle' size={24} color={colorScheme === 'light' ? 'black' : 'white'}
        onPress={()=>setCount(count-1)}></AntDesign>
        <Text className='text-xl dark:text-white'>{count}</Text>
        <AntDesign name='pluscircle' size={24} color={colorScheme === 'light' ? 'black' : 'white'}
        onPress={()=>setCount(count+1)}></AntDesign>
        </View>
        <Text className='text-2xl text-white font-extrabold dark:text-white'>${precio * count}</Text>
        </View>
   <View className='mt-5'>     
      <Text className='text-sm text-black/60 dark:text-white/70 text-white' numberOfLines={2}>{descripcion}</Text>
      <Text className='text-sm text-black/60 dark:text-white text-white'>Talle: {talle}</Text>
      <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
        <Text className='text-white dark:text-black font-bold'>Añadir al carro</Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
}
