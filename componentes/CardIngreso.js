import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function CardIngreso() {
  return (
    <ScrollView className='bg-black'>
        <View className="p-5">
          <Text className="text-center text-yellow-500 font-light mb-8 text-2xl mt-8">
            Ingresar
          </Text>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Email"
          ></TextInput>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Contraseña"
          ></TextInput>
          <Text className="text-center text-white my-8">
            Si aun no tienes una cuenta, por favor:
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 p-3 rounded-full bg-yellow-500">
            <Text className="text-center text-white font-bold">
              Ingresá
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}
