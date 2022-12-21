import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardIngreso(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   ;
let ingresar = () => {
  navigation.navigate('Home')
}
    async function signIn(event){
        event.preventDefault();
        let data = {
            email,
            password
        }
        AsyncStorage.setItem('data', JSON.stringify(data))
        .catch(error=>console.error(error))
    }
    useEffect(()=>{
        AsyncStorage.setItem('data')
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    },[]);
    const image = {
        uri: "https://st.depositphotos.com/1051862/3469/i/600/depositphotos_34699129-stock-photo-abstract-red-gradient-background.jpg",
      };
        return(
    <ImageBackground
      className="w-full h-full"
      source={image}
      resizeMode="cover"
    >
      <ScrollView>
        <View className="justify-center p-5 mt-5">
          <Text className="text-center text-red-800 bg-yellow-200 font-bold mb-8 rounded-full text-xl">
            Ingresá
          </Text>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Correo"
            onChangeText={setEmail}
            value={email}
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 mb-9 bg-white"
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
          ></TextInput>
          <TouchableOpacity onPress={(ingresar)} className="flex-row justify-center w-8/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300">
            <Text className="text-center text-white bg-black font-bold">
              Entrar
            </Text>
          </TouchableOpacity>
          <Text className="text-center mt-9 text-red-800 bg-yellow-200 font-bold rounded-full">
            Si no tenés una cuenta aún, por favor:
          </Text>
          <TouchableOpacity onPress={''} className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300">
            <Text className="text-center text-white bg-black font-bold">
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
        )
}