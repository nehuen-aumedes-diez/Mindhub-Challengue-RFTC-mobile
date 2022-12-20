import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import remeraMActions from '../redux/actions/remeraMAction'

export default function RemeraHombre() {
    const dispatch = useDispatch();
    const { getRemeraM } = remeraMActions;
    const { remerasM } = useSelector((state) => state.remerasM);

    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getRemeraM());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <FlatList
            data={remerasM}
            keyExtractor={(remerasM) => remerasM._id}
            renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>
    );
}
