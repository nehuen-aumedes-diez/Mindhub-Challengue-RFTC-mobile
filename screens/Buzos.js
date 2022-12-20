import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { productos } from "../productos";
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

    useEffect(() => {
        dispatch(getBuzo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <FlatList
            data={buzos}
            keyExtractor={(buzos) => buzos._id}
            renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>
    );
}
