import React from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";

export default function CardContacto(){
    const image = {uri:'https://st.depositphotos.com/1051862/3667/i/600/depositphotos_36675635-stock-photo-abstract-orange-gradient-background.jpg'}
    return(
        <View>
            <ImageBackground className='w-full h-full' source={image} resizeMode='cover'>
            <Text className="text-center text-red-800 bg-yellow-100 font-bold mb-8 rounded-full text-xl mt-9">¿Tenés alguna consulta?</Text>
            <Text className="text-center mt-9 text-red-800 bg-yellow-100 font-bold rounded-full mb-9">Escribinos un mensaje:</Text>
            <TextInput className="text-center border p-2 rounded-full my-2 bg-white" placeholder="Nombre"></TextInput>
            <TextInput className="text-center border p-2 rounded-full my-2 bg-white" placeholder="Apellido"></TextInput>
            <TextInput className="text-center border p-2 rounded-full my-2 bg-white" placeholder="Correo"></TextInput>
            <TextInput className="text-center border p-9 rounded-lg my-2 bg-white" placeholder="Mensaje"></TextInput>
            <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
            <Text className="text-center text-white bg-black font-bold">
              Enviar
            </Text>
          </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}