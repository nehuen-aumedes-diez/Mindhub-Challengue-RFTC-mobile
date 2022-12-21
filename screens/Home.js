import React from "react";
import { View, Image , Text, StyleSheet } from "react-native";
import CardHome from "../componentes/CardHome";

export default function Home(){
    return(
        <View style={styles.container}>
            <CardHome></CardHome>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        minHeight:700,
    }
})

