import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import gorraActions from '../redux/actions/gorraAction'
import ProductoCardGorra from "../componentes/ProductoCardGorra";

export default function Gorras() {
    const dispatch = useDispatch();
    const { getGorra, filtrarGorras } = gorraActions;
    const { gorras } = useSelector((state) => state.gorras);
    
    let navigation = useNavigation()

    useEffect(() => {
        dispatch(getGorra());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let filter = (event) => {
        //console.log(event)
        let text = event?.trim()
        dispatch(filtrarGorras(text))
    }

    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={filter} placeholder="Buscar por nombre..." />
            {gorras.length > 0
            ?   <FlatList
                    data={gorras}
                    keyExtractor={(gorras) => gorras._id}
                    renderItem={({ item }) => <ProductoCardGorra {...item}></ProductoCardGorra>}
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