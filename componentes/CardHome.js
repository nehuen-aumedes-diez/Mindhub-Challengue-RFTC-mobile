import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    Animated,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function CardHome() {
    const image1 = { uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/MODELS-WIDE-WEBSITE_2100x.jpg?v=1652804759", };
    const image2 = { uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FASHION-FOOTBALL-FANS-WEBSITE-ARGENTINA-C.jpg?v=1613705247%202500w%201669h", };
    const image3 = { uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FASHION-FOOTBALL-SOL-ARGENTINA-WEBSITE.jpg?v=1613705300%202400w%201602h", };

    const imagesBanner = [image1, image2, image3];
    const navigation = useNavigation();
    const GoTienda = () => {
        navigation.navigate("Tienda");
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;

    let [counter, setCounter] = useState(0);
    let [id, setId] = useState(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
        }).start();
    }, [fadeAnim]);

    useEffect(() => {
        let idInterval = setInterval(() => {
            setCounter(counter + 1);
            if (counter === imagesBanner.length - 1) {
                setCounter(0);
            }
        }, 4000);
        setId(idInterval);
        return clearInterval(id);
    }, [counter]);

    return (
        <ScrollView className='h-full bg-black'>
            <Animated.Text style={{ opacity: fadeAnim }} className="text-yellow-500 font-extralight text-4xl text-center mt-10 tracking-widest"> - Retro Football - </Animated.Text>
            <Text className="text-white font-thin text-lg text-left ml-24 tracking-wider"> Team Clothing</Text>
            <Animated.View style={{ opacity: fadeAnim }} className="w-full mt-5 align-center p-2">
                <Image source={imagesBanner[counter]} resizeMode="cover" className="bg-red w-full h-screen" />
            </Animated.View>
            <View className='bg-dark w-full h-full mt-5'>
                <Text className='text-white text-center text-xl px-14 font-extralight mt-8'>Te invitamos a conocer nuestro catalogo de productos</Text>
                <View className='flex items-center'>
                    <TouchableOpacity onPress={GoTienda} className='bg-zinc-800 w-3/6 p-5 rounded-full mt-8'>
                        <Text className='text-yellow-600 text-center font-extralight'>Remeras Mujer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={GoTienda} className='bg-zinc-800 w-3/6 p-5 rounded-full mt-8'>
                        <Text className='text-yellow-600 text-center font-extralight'>Remeras Hombre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={GoTienda} className='bg-zinc-800 w-3/6 p-5 rounded-full my-8'>
                        <Text className='text-yellow-600 text-center font-extralight'>Buzos</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
