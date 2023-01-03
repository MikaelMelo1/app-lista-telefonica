import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const img = 'cachoeira-do-sul.jpg'
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
    width: 480,


  },
});

export default function Inicial(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./cachoeira-do-sul.jpg')} style={styles.imageBackground}>
        <Text style={styles.titulo}>
          Bem Vindo ao Agenda <Text style={styles.span}>Cachoeira do Sul</Text>
        </Text>
        <Text style={styles.subtitulo}>
          Aqui você irá encontrar os mais diversos números e atualizados de Cachoeira do Sul
        </Text>
        <View style={styles.botao}>
          <TouchableOpacity onPress={() => props.navigation.navigate("menu")}>
            <Text style={{
              color: 'black', padding: 12, backgroundColor: 'white'
            }} >Click aqui para ir para o Menu</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
