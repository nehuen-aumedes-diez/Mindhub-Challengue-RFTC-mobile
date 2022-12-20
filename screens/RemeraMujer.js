import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import remeraFActions from '../redux/actions/remeraFAction'

export default function RemeraMujer() {
    const dispatch = useDispatch();
    const { getRemeraF } = remeraFActions;
    const { remerasF } = useSelector((state) => state.remerasF);

    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getRemeraF());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <FlatList
            data={remerasF}
            keyExtractor={(remerasF) => remerasF._id}
            renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>
    );
}
