import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buzos from '../screens/Buzos';
import ListaProductos from '../screens/ListaProductos';
import Gorras from '../screens/Gorras';
import RemeraMujer from '../screens/RemeraMujer';
import RemeraHombre from '../screens/RemeraHombre';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos nuestros productos" component={ListaProductos} />
      <Stack.Screen name="Buzos" component={Buzos} />
      <Stack.Screen name="Gorras" component={Gorras} />
      <Stack.Screen name="Remeras de Mujeres" component={RemeraMujer} />
      <Stack.Screen name="Remeras de Hombres" component={RemeraHombre} />
    </Stack.Navigator>
  );
}