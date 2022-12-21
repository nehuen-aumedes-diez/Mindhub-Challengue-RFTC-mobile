import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
  Keyboard, 
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function CardRegistro() {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const image = {
    uri: "https://st.depositphotos.com/1051862/3469/i/600/depositphotos_34699129-stock-photo-abstract-red-gradient-background.jpg",
  };
  let navigation = useNavigation()
  const butIng = () => {
      navigation.navigate('Ingreso')
  }
  const butEnvi = () => {
    navigation.navigate('ListaProductos')
}
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Por favor ingresa tu correo", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Ingresa un correo válido", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Por favor ingresa tu nombre y apellido", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Por favor ingresa un número telefónico", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Por favor ingresa una contraseña", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("La contraseña debe tener mínimo 5 caracteres", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
      } catch (error) {
        Alert.alert("Error", "Algo salió mal");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <ImageBackground
      className="w-full h-full"
      source={image}
      resizeMode="cover"
    >
      <ScrollView>
        <View className="justify-center p-5 mt-5 ">
          <Text className="text-center text-red-800 bg-yellow-200 font-bold mb-8 rounded-full text-xl">
            Registrate
          </Text>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Nombre y Apellido"
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            error={errors.fullname}
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Correo"
            onFocus={() => handleError(null, "email")}
            onChangeText={(text) => handleOnchange(text, "email")}
            error={errors.email}
          ></TextInput>
          <TextInput
            className="text-center border p-2 rounded-full my-2 bg-white"
            placeholder="Teléfono"
            keyboardType="numeric"
            onFocus={() => handleError(null, "phone")}
            onChangeText={(text) => handleOnchange(text, "phone")}
            error={errors.phone}
          ></TextInput>
          <TextInput
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            className="text-center border p-2 rounded-full my-2 mb-9 bg-white"
            placeholder="Contraseña"
            error={errors.password}
            password
          ></TextInput>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListaProductos") && validate}
            className="flex-row justify-center w-8/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300"
          >
            <Text className="text-center text-white bg-black font-bold">
              Enviar
            </Text>
          </TouchableOpacity>
          <Text className="text-center mt-9 font-bold bg-white rounded-full text-red-800 bg-yellow-200 font-bold">
            Si ya tenés una cuenta, por favor:
          </Text>
          <TouchableOpacity onPress={butIng} className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full border border-orange-300">
            <Text className="text-center text-white bg-black font-bold">
              Ingresá
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
