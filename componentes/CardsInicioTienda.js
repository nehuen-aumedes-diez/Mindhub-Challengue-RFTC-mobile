import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardsInicioTienda() {
  let navigation = useNavigation();
  const irABuzos = () => {
    navigation.navigate("Buzos");
  };
  const irARemeMujer = () => {
    navigation.navigate("Remeras de Mujeres");
  };
  const irARemeHombre = () => {
    navigation.navigate("Remeras de Hombres");
  };

  const imagenBuzo =
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-HOODIE-DIABLO_720x.png?v=1571518856";
  const imagenRemeMujer =
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/WOMEN-SQUARE-SOL_720x.png?v=1603886812";
  const imagenRemeHombre =
    "https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-SOL-ALBI_720x.png?v=1571493500";

  return (
    <ScrollView className='bg-black p-5'>
      <View className="w-full bg-zinc-900 rounded-3xl my-5 p-6">
        <Text className="text-2xl text-center text-yellow-500 my-5 font-light">
          BUZOS
        </Text>
        <View>
          <Image
            source={{ uri: imagenBuzo }}
            className="w-full h-72"
            style={{ resizeMode: "contain", borderRadius: 25 }}
          ></Image>
        </View>
        <View className="mt-5">
          <Text className="text-lg text-white text-center my-5 font-extralight">
            Buzos unisex de puro algodón 100% con bordado de alta calidad y
            diseños exclusivos.
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-yellow-500 dark:bg-white p-3 rounded-full">
            <Text className="text-white text-base dark:text-black font-medium" onPress={irABuzos}>
              Ir a esta sección
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full bg-zinc-900 rounded-3xl my-5 p-6">
        <Text className="text-2xl text-center text-yellow-500 my-5 font-light">
          REMERAS de MUJERES
        </Text>
        <View>
          <Image
            source={{ uri: imagenRemeMujer }}
            className="w-full h-72"
            style={{ resizeMode: "contain", borderRadius: 25 }}
          ></Image>
        </View>
        <View className="mt-5">
          <Text className="text-lg text-white text-center my-5 font-extralight">
            Camisetas deportivas con escote en 'V' con bordados de alta calidad
            y diseños exclusivos.
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-yellow-500 dark:bg-white p-3 rounded-full">
            <Text
              className="text-white text-base dark:text-black font-bold"
              onPress={irARemeMujer}
            >
              Ir a esta sección
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full bg-zinc-900 rounded-3xl my-5 p-6">
        <Text className="text-2xl text-center text-yellow-500 my-5 font-light">
          REMERAS de HOMBRES
        </Text>
        <View>
          <Image
            source={{ uri: imagenRemeHombre }}
            className="w-full h-72"
            style={{ resizeMode: "contain", borderRadius: 25 }}
          ></Image>
        </View>
        <View className="mt-5">
          <Text className="text-lg text-white text-center my-5 font-extralight">
            Camisetas deportivas con corte slim fit, con bordados de alta
            calidad y diseños exclusivos.
          </Text>
          <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-yellow-500 dark:bg-white p-3 rounded-full">
            <Text
              className="text-white text-base dark:text-black font-bold"
              onPress={irARemeHombre}
            >
              Ir a esta sección
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
