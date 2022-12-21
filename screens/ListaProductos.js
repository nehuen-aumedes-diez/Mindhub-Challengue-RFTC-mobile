import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CardsInicioTienda from "../componentes/CardsInicioTienda";


export default function ListaProductos() {

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 15}}>
      <CardsInicioTienda></CardsInicioTienda>
    </ScrollView>
  );
}