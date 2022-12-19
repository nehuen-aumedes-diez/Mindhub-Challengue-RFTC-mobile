import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CardHome (){
    const image = {uri:'https://pbs.twimg.com/media/E5_oKcDUYAcmUVK.jpg'}
    return(
        <View>
            <ImageBackground className='w-full h-full' source={image} resizeMode='cover'>
            <Text className='text-xl text-center text-white pt-10'>¡Bienvenido a RFTC!</Text>
            <Text className='text-white pt-5 pb-5 text-center'>Mirá todos los productos que tenemos disponibles para vos...</Text>
            <TouchableOpacity onPress={''} className='bg-white flex-row justify-center w-8/10 self-center mt-5 p-3 rounded-full'>
                <Text className='font-bold'>Tienda</Text>
            </TouchableOpacity>
            {/* <View className='flex-column gap-3 items-end'>
            <Entypo name="mail" size={24} color="white" />
            <FontAwesome5 name="map-marked-alt" size={24} color="white" />
            <MaterialCommunityIcons name="facebook" size={24} color="white" />
            <Ionicons name="logo-twitter" size={24} color="white" />
            <FontAwesome5 name="instagram" size={24} color="white" />
            </View> */}
            </ImageBackground>
        </View>
    )
}