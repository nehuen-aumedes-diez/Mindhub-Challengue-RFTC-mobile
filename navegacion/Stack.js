import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buzos from '../screens/Buzos';
import ListaProductos from '../screens/ListaProductos';
import RemeraMujer from '../screens/RemeraMujer';
import RemeraHombre from '../screens/RemeraHombre';
import Home from '../screens/Home';
import Registro from '../screens/Registro';
import Ingreso from '../screens/Ingreso';
import Contacto from '../screens/Contacto';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos nuestros productos" component={ListaProductos} />
      <Stack.Screen name="Buzos" component={Buzos} />
      <Stack.Screen name="Remeras de Mujeres" component={RemeraMujer} />
      <Stack.Screen name="Remeras de Hombres" component={RemeraHombre} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Ingreso" component={Ingreso} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}