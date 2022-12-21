import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button
} from "react-native";
export default function CardRegistro() {
  return (
      <ScrollView className='bg-zinc-900'>
        <View className="p-5">
          <Text className="text-center text-yellow-500 font-light mb-8 text-2xl mt-8">
            Registrate
          </Text>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Nombre"
          ></TextInput>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Apellido"
          ></TextInput>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Correo"
          ></TextInput>
          <TextInput
            className="text-center border p-3 rounded-full my-4  bg-white"
            placeholder="Contraseña"
          ></TextInput>
          <Text className="text-center text-white my-8">
            Si ya tenés una cuenta, por favor:
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 p-3 rounded-full bg-yellow-500">
            <Text className="text-center text-white font-bold">
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}
