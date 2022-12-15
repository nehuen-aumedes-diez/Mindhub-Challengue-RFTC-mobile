import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ListaProductos from "./screens/ListaProductos";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black mt-10">
      <ListaProductos></ListaProductos>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
