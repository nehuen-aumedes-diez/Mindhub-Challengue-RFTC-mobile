import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ListaProductos from "./screens/ListaProductos";
import Home from './screens/Home'

export default function App() {
  return (
    <SafeAreaView className="mt-10">
      <Home></Home>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
