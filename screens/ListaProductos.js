import React from "react";
import { FlatList, Text } from "react-native";
import { productos } from "../productos";
import ProductoCard from "../componentes/ProductoCard";

export default function ListaProductos() {
  return (
    <FlatList
      data={productos}
      keyExtractor={(producto) => producto.id}
      renderItem={({ item }) => <ProductoCard {...item}></ProductoCard>}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    ></FlatList>
  );
}
