import React from "react";
import {
  SectionList,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  ScrollView,
  Pressable,
  handleSubmit,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Noticias1 = () => {
  const image = {
    uri: "https://us.cdn.eltribuno.com/112021/1636841501527.jpg?&cw=720",
  };
  const image2 = {
    uri: "https://media.todojujuy.com/p/e2b6914d0632ab72a8de1cb31949083b/adjuntos/227/imagenes/003/255/0003255860/970x546/smart/boca-juniors.png",
  };
  const image3 = {
    uri: "https://www.nippon.com/es/ncommon/contents/news/1041244/1041244.jpg",
  };
  const image4 = {
    uri: "https://www.baenegocios.com/__export/1669939992421/sites/cronica/img/2022/12/01/mundial_2026_x1x_crop1669939441861.jpg_966076397.jpg",
  };
  const image5 = {
    uri: "https://media.sitioandino.com.ar/p/1ff672c694badca2cbdefc18114e60bf/adjuntos/335/imagenes/000/218/0000218457/790x0/smart/diego-maradona-1254614jpg.jpg",
  };

  const image6 = {
    uri: "https://informebaires.com/wp-content/uploads/2022/12/26893-la-mls-pretende-quedarse-con-el-pase-de-un-jugador-de-la-scaloneta.jpg",
  };
  return (
    <ScrollView className="bg-black p-5">
      <Text style={styles.h1Noticias}>NOTICIAS FUTBOLERAS</Text>

      <View style={styles.contenedorNoticias}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imagenNoticias1}
        ></ImageBackground>
      </View>
      <View>
        <Text style={styles.noticias1}>
          {" "}
          Argentina, sede del Mundial de Fútbol Gay{" "}
        </Text>

        <Text style={styles.noticias2}>
          {" "}
          El fútbol propone una buena noticia para nuestro país: en noviembre de
          2024 se llevará a cabo en Argentina el 25° Mundial de Fútbol IGLFA
          (International Gay and Lesbian Football Asociations) y, por primera
          vez en la historia, será apoyado por la Asociación del Fútbol
          Argentino (AFA).{" "}
        </Text>
        <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 p-3 rounded-full bg-yellow-500 mb-8">
          <Text className="text-center text-white font-bold">LEE MÁS</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.h1Noticias2}>
        Fútbol femenino en alza: una final de Libertadores, audiencias récord y
        una Selección en crecimiento
      </Text>

      <View style={styles.contenedorNoticias}>
        <ImageBackground
          source={image2}
          resizeMode="cover"
          style={styles.imagenNoticias2}
        ></ImageBackground>
      </View>

      <View style={styles.contenedorBoton}>
        <Text style={styles.noticias2}>
          {" "}
          En el balance de 2022 hay signos positivos. Boca y la Selección
          consiguieron resultados históricos. Y además, acompañó el público.{" "}
        </Text>
        <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 p-3 rounded-full bg-yellow-500 mb-8">
          <Text className="text-center text-white font-bold">LEE MÁS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  h1Noticias: {
    textAlign: "center",
    fontWeight: "bold",
    color: "gold",
    fontSize: 30,
    margin: 30,
  },
  imagenNoticias1: {
    justifyContent: "center",
    width: 412,
    height: 250,
  },
  contenedorNoticias: {
    justifyContent: "center",
    alignItems: "center",
    width: 412,
    height: 280,
  },
  noticias1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    margin: 5,
  },
  noticias2: {
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: 2,
  },
  botonNoticias: {
    backgroundColor: "var(--Amarillo)",
    borderRadius: 5,
    color: "red",
  },
  h1Noticias2: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    margin: 5,
  },
  imagenNoticias2: {
    justifyContent: "center",
    width: 412,
    height: 250,
    margin: 2,
  },
  contenedorBoton: {},
});

export default Noticias1;
