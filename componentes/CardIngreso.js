import React, {useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView } from "react-native";
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
        //   swal({
        //     title: "Bienvenido "+ res.payload.response.user.name,
        //     // text:  "You are logged!!",
        //     icon: "success",
        //     timer: "3000"
        // })
          // redirect()
          alert("Bienvenido "+ res.payload.response.user.name)
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
            onChangeText={(item)=>{handleText(item,'email')}}
            
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 mb-9 bg-white"
            placeholder="Contraseña"
            password={true}
            secureTextEntry={true}
            onChangeText={(item)=>{handleText(item,'password')}}
           
          ></TextInput>
          <TouchableOpacity onPress={SignIn} className="flex-row justify-center w-8/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300">
            <Text  className="text-center text-white bg-black font-bold">
              Entrar
            </Text>
          </TouchableOpacity>
          <Text className="text-center mt-9 text-red-800 bg-yellow-200 font-bold rounded-full">
            Si no tenés una cuenta aún, por favor:
          </Text>
          <TouchableOpacity onPress={butRegis} className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300">
            <Text className="text-center text-white bg-black font-bold">
              Registrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
        )
}