import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ListaProductos from "./screens/ListaProductos";
import Home from './screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navegacion/Drawer';



export default function App() {
  return (
    <NavigationContainer >
      <Drawer/>
    </NavigationContainer>
  );
}
