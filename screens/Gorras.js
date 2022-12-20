import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import gorraActions from '../redux/actions/gorraAction'

export default function Gorras() {
    const dispatch = useDispatch();
    const { getGorra } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);
    
    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getGorra());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <FlatList
            data={gorras}
            keyExtractor={(gorras) => gorras._id}
            renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        ></FlatList>
    );
}
