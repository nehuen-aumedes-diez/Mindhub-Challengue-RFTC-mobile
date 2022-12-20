import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import ProductoCard from "../componentes/ProductoCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import remeraMActions from '../redux/actions/remeraMAction'

export default function RemeraHombre() {
    const dispatch = useDispatch();
    const { getRemeraM, filtrarRemerasM } = remeraMActions;
    const { remerasM } = useSelector((state) => state.remerasM);

    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getRemeraM());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let filter = (event) => {
        //console.log(event)
        let text = event?.trim()
        dispatch(filtrarRemerasM(text))
    }

    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={filter} placeholder="Buscar por nombre..." />
            {(remerasM.length > 0)
            ?   <FlatList
                    data={remerasM}
                    keyExtractor={(remerasM) => remerasM._id}
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