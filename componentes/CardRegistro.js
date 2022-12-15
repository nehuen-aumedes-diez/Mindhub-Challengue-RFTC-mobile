import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
export default function CardRegistro(){
    return (
        <ScrollView>
            <View>
                <Text>Registrate</Text>
                <TextInput placeholder='Nombre'></TextInput>
                <TextInput placeholder='Apellido'></TextInput>
                <TextInput placeholder='Correo'></TextInput>
                <TextInput placeholder='Contraseña'></TextInput>
                <Text>Si ya tenés una cuenta, por favor:</Text>
                <TouchableOpacity>
                    <Text>Ingresa</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}