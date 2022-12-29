import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
});

export default function Inicial(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Bem Vindo ao Agenda <Text style={styles.span}>Cachoeira do Sul</Text>
      </Text>
      <Text style={styles.subtitulo}>
        Aqui você irá encontrar os mais diversos números e atualizados de Cachoeira do Sul
      </Text>
      <View style={styles.botao}>
        <Button
          style={styles.button}
          title="Click aqui para ir para o menu" onPress={() => props.navigation.navigate("menuA")}
        />
      </View>
    </View>
  );
}
