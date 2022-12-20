import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardsInicioTienda() {
    let navigation = useNavigation()
    const irABuzos = () => {
        navigation.navigate('Buzos')
    }
    const irARemeMujer = () => {
        navigation.navigate('Remeras de Mujeres')
    }
    const irARemeHombre = () => {
        navigation.navigate('Remeras de Hombres')
    }
    const irAGorras = () => {
        navigation.navigate('Gorras')
    }

    const imagenBuzo = 'https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-HOODIE-DIABLO_720x.png?v=1571518856'
    const imagenRemeMujer = 'https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/WOMEN-SQUARE-SOL_720x.png?v=1603886812'
    const imagenRemeHombre = 'https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/MODEL-SOL-ALBI_720x.png?v=1571493500'
    const imagenGorra = 'https://cdn.shopify.com/s/files/1/0015/5841/3357/collections/IMG_0121_720x.jpg?v=1654540849'

return (
    <>

    <View className="w-full bg-red-900 rounded-3xl p-5 my-5">
        <Text className='text-lg font-semibold dark:text-white/70'>BUZOS</Text>
        <View>
            <Image
                source={{ uri: imagenBuzo }}
                className="w-full h-72"
                style={{ resizeMode: "contain" }}
            ></Image>
        </View>
        <View className='mt-5'>     
            <Text className='text-sm text-black/60 dark:text-white/70 text-white'>Buzos unisex diseñados en alta calidad</Text>
            <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
                <Text className='text-white dark:text-black font-bold' onPress={irABuzos}>Ir a esta sección</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View className="w-full bg-red-900 rounded-3xl p-5 my-5">
        <Text className='text-lg font-semibold dark:text-white/70'>REMERAS de MUJERES</Text>
        <View>
            <Image
                source={{ uri: imagenRemeMujer }}
                className="w-full h-72"
                style={{ resizeMode: "contain" }}
            ></Image>
        </View>
        <View className='mt-5'>     
            <Text className='text-sm text-black/60 dark:text-white/70 text-white'>Remeras bien facheritas</Text>
            <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
                <Text className='text-white dark:text-black font-bold' onPress={irARemeMujer}>Ir a esta sección</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View className="w-full bg-red-900 rounded-3xl p-5 my-5">
        <Text className='text-lg font-semibold dark:text-white/70'>REMERAS de HOMBRES</Text>
        <View>
            <Image
                source={{ uri: imagenRemeHombre }}
                className="w-full h-72"
                style={{ resizeMode: "contain" }}
            ></Image>
        </View>
        <View className='mt-5'>     
            <Text className='text-sm text-black/60 dark:text-white/70 text-white'>Remeras bien copadas man</Text>
            <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
                <Text className='text-white dark:text-black font-bold' onPress={irARemeHombre}>Ir a esta sección</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View className="w-full bg-red-900 rounded-3xl p-5 my-5">
        <Text className='text-lg font-semibold dark:text-white/70'>GORRAS</Text>
        <View>
            <Image
                source={{ uri: imagenGorra }}
                className="w-full h-72"
                style={{ resizeMode: "contain" }}
            ></Image>
        </View>
        <View className='mt-5'>     
            <Text className='text-sm text-black/60 dark:text-white/70 text-white'>Gorras pal sol bien facheras</Text>
            <TouchableOpacity className='flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full'>
                <Text className='text-white dark:text-black font-bold' onPress={irAGorras}>Ir a esta sección</Text>
            </TouchableOpacity>
        </View>
    </View>
    </>
)
}