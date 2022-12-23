import React from "react";
import {
  SectionList,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Nosotros from "../screens/Nosotros";

const Nosotros1 = () => {
  const image = {
    uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/CLOSEUP-SOL-NEGRO-3.png?v=1613692939",
  };
  const image2 = {
    uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/embroidery-workshop-20190605-0013_3000x.jpg?v=1613692939",
  };
  const image3 = {
    uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/FOOTER.png?v=1613692940",
  };
  const image4 = {
    uri: "https://cdn.shopify.com/s/files/1/0015/5841/3357/files/CLOSEUP-SOL-NEGRO-3.png?v=1613692939",
  };
  return (
    <ScrollView className="bg-black p-5">
      <Text style={styles.h1Nosotros}> - Nosotros - </Text>

      <View style={styles.nosotrosContenedor}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.img1Container}
        ></ImageBackground>
      </View>

      <View style={styles.somosContainer}>
        <Text style={styles.somosTitulo}> ¿Quienes Somos? </Text>
        <Text style={styles.somosPar}>
          {" "}
          Nuestra historia comienza allá por 1970 con la inauguración de nuestra
          primera tienda física, "El rey de las Camisetas". Con el correr de los
          años nos fuimos expandiendo cada vez más a través de la apertura de
          nuevas sucursales, hasta que en 1986 abrimos el primer local integral
          de camisetas deportivas. Desde ese momento, todo fue crecimiento:
          realizamos alianzas estratégicas con otras marcas para ampliar
          nuestras redes y en 1988 inauguramos un nuevo concepto de tienda
          deportiva en San Isidro. Esta tienda se llamó RFTC SHOPS. El año 1997
          fue clave. Nos consolidamos como líderes al abrir más de un local por
          mes durante ese año y contar así con una estructura total de 70
          sucursales a nivel nacional.{" "}
        </Text>
      </View>

      <Text style={styles.misionTitulo}> Nuestra Mision </Text>

      <View>
        <ImageBackground
          source={image2}
          resizeMode="cover"
          style={styles.img1Container}
        ></ImageBackground>
        <Text style={styles.mision1}>
      
          Vivimos entrenando para ganar y conquistar a los clientes ofreciendo
          una experiencia premium.
        </Text>
      </View>

      <View>
        <ImageBackground
          source={image3}
          resizeMode="cover"
          style={styles.img1Container}
        ></ImageBackground>
        <Text style={styles.mision2}>
          
          Ser el retailer líder en ventas y en servicio al cliente, siendo
          siempre cercano al consumidor.
        </Text>
      </View>

      <View style={styles.contenedorImg4}>
        <ImageBackground
          source={image4}
          resizeMode="cover"
          style={styles.img1Container}
        ></ImageBackground>
        <View style={styles.misionView}>
          <Text style={styles.mision3}>Cliente siempre primero</Text>
          <Text style={styles.mision3}>Compromiso</Text>
          <Text style={styles.mision3}>Pasión</Text>
          <Text style={styles.mision3}>innovación</Text>
          <Text style={styles.mision3}>Comunicación</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img1Container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#fff",

    alignItems: "center",
    width: 412,
    height: 250,
  },
  h1Nosotros: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    margin: 30,
  },
  contenedorPrincipal: {},
  somosContainer: {
    flex: 2,
    flexDirection: "column",
  },
  somosTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    color: "gold",
    fontSize: 30,
    margin: 30,
  },
  somosPar: {
    color: "white",
    fontSize: 20,
  },
  misionTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    margin: 30,
  },
  mision1: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 2,
    margin: 30,
  },
  mision2: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 2,
    margin: 30,
  },
  mision3: {
    color: "white",
    justifyContent: "center",
    fontSize: 20,
    alignItems: "center",
    letterSpacing: 2,
    flex:1,
    textAlign: "center",
    justifyContent:'center',

  },
  misionView: {
    marginTop: 30,
    contenedorImg4:{
      justifyContent:'center',
     
    },
    img1Container:{
      flex:1,
      textAlign: "center",
      justifyContent:'center',

    }




  },
});

export default Nosotros1;
