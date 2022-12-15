import { StatusBar } from "expo-status-bar";
import {SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ListaProductos from "./componentes/ListaProductos";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black pt-10">
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">
          Nueva colección
        </Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
        ></Switch>
      </View>
      <ListaProductos></ListaProductos>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
