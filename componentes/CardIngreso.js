import React, {useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import userActions from '../redux/actions/userAction';

export default function CardIngreso(){
    let dispatch = useDispatch()

    let navigation = useNavigation()
    const butRegis = () => {
        navigation.navigate('Registro')
   }
  let [data,setData] = useState({
      email: "",
      password: ""
  })
  
  console.log(data,1);

  const handleText = (value, fieldName) => {
    setData({ ...data, [fieldName]: value });
  };


    async function SignIn(e){
   
      try{
        let res = await dispatch(userActions.signIn(data))
        // console.log(4,res)
        if (res.payload.success) {

          Alert.alert("Bienvenido "+ res.payload.response.user.name)
          navigation.navigate('Inicio')
       }
       else {
        alert('usuario incorrecto')
       }
      } catch(error){
        console.log(error,11);
      }
    }

    const image = {
        uri: "https://st.depositphotos.com/1051862/3469/i/600/depositphotos_34699129-stock-photo-abstract-red-gradient-background.jpg",
      };
        return(
      <ScrollView className='bg-black'>
        <View className="justify-center p-5 mt-5">
          <Text className="text-center text-yellow-500 font-light mb-8 rounded-full text-2xl mt-9">
            Ingresá
          </Text>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Correo"
            onChangeText={(item)=>{handleText(item,'email')}}
            
          ></TextInput>
          <TextInput
            className="text-center border p-3 rounded-full my-4 bg-white"
            placeholder="Contraseña"
            password={true}
            secureTextEntry={true}
            onChangeText={(item)=>{handleText(item,'password')}}
           
          ></TextInput>
          <TouchableOpacity onPress={SignIn} className="flex-row justify-center w-10/12 self-center mt-10 p-3 rounded-full bg-yellow-500">
            <Text  className="text-center text-white font-bold">
              Entrar
            </Text>
          </TouchableOpacity>
          <Text className="text-center mt-9 text-white font-medium text-s my-10">
            Si no tenés una cuenta aún, por favor:
          </Text>
          <TouchableOpacity onPress={butRegis} className="flex-row justify-center w-10/12 self-center mt-3 p-3 rounded-full bg-yellow-500">
            <Text className="text-center text-white font-bold">
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
        )
}

