import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CardCarrito(props) {
    let {foto, nombre, precio} = props
    return (
        <View className='bg-zinc-800 w-full min-h-0 mt-10 p-5 flex flex-row justify-center justify-evenly'>
            <Image source={{ uri: foto }} className="w-32 h-36" style={{ resizeMode: "cover" }} ></Image>
            <View className='flex justify-center items-center gap-2'>
                <Text className='text-white text-xl font-light'>"{nombre}"</Text>
                <Text className='text-white text-sm font-extralight'>Precio: <Text className='text-yellow-500 font-normal'>${precio}</Text> ARS</Text>
            </View>
        </View>
    )
}