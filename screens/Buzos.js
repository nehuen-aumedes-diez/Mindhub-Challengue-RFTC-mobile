import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import buzoActions from "../redux/actions/buzoAction";

export default function Buzos() {
    const dispatch = useDispatch();
    const { getBuzo, filtrarBuzos } = buzoActions;
    const { buzos } = useSelector((state) => state.buzos);
    const prueba = useSelector((state) => state);
    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let filter = (event) => {
        //console.log(event)
        let text = event?.trim()
        dispatch(filtrarBuzos(text))
    }

    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={filter} placeholder="Buscar por nombre..." />
            {buzos.length > 0
            ?   <FlatList
                    data={buzos}
                    keyExtractor={(buzos) => buzos._id}
                    renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
                    contentContainerStyle={{ paddingHorizontal: 15 }}
                ></FlatList>
            :   <Image source={require('../assets/notfound_articulos.png')} style={{width: '100%', height: 500}} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 30,
        borderWidth: 1,
        marginHorizontal: 10,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 25,
    },
})