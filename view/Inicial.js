import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",

  },
  titulo: {
    color: "white",
    fontSize: 20,
  },
  subtitulo: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
  span: {
    color: "yellow",
  },
  botao: {
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 600,


  },
});

export default function Inicial(props) {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('./fundo.jpg')} style={styles.imageBackground}>
        <Image source={require('./icone-inicial.png')} style={{ height: 200, width: 200, marginBottom: 30 }}></Image>
        <Text style={styles.titulo}>
          Bem Vindo ao Agenda <Text style={styles.span}>Cachoeira do Sul</Text>
        </Text>
        <Text style={styles.subtitulo}>

        </Text>
        <View style={styles.botao}>
          <TouchableOpacity onPress={() => props.navigation.navigate("menu")}>
            <Text style={{
              elevation: 10,
              color: 'black', padding: 12, backgroundColor: 'white'
            }} >INICIAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >

    </View >
  );
}
