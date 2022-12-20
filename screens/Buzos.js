import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import buzoActions from "../redux/actions/buzoAction";

export default function Buzos() {
    const dispatch = useDispatch();
    const { getBuzo, filtrarBuzos } = buzoActions;
    const { buzos, ordenPrecio, busqueda } = useSelector((state) => state.buzos);
    const prueba = useSelector((state) => state);
    let navigation = useNavigation()
    let [ordenamiento, setOrdenamiento] = useState('')

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
            <FlatList
            data={buzos}
            keyExtractor={(buzos) => buzos._id}
            renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            ></FlatList>
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