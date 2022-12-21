import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function CardContacto(){
    return(
        <ScrollView className='bg-zinc-900 p-5'>
            <Text className="text-center text-yellow-500 font-light mb-8 rounded-full text-2xl mt-9">¿Tenés alguna consulta?</Text>
            <Text className="text-center mt-9 text-white font-medium text-s mb-9">Escribinos un mensaje:</Text>
            <TextInput className="text-center border p-3 rounded-full my-2 bg-white" placeholder="Nombre"></TextInput>
            <TextInput className="text-center border p-3 rounded-full my-2 bg-white" placeholder="Apellido"></TextInput>
            <TextInput className="text-center border p-3 rounded-full my-2 bg-white" placeholder="Correo"></TextInput>
            <TextInput className="text-center border p-8 rounded-full my-2 bg-white" placeholder="Mensaje"></TextInput>
            <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-10 p-3 rounded-full bg-yellow-500">
            <Text className="text-center text-white font-bold ">
              Enviar
            </Text>
          </TouchableOpacity>
        </ScrollView>
    )
}