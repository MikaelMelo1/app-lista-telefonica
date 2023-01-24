import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    color: "#6200ee",
    fontWeight: "bold",
  },
  intro: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "justify",
  },
  intro1: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "justify",
  },
  version: {
    color: "gray",
    marginTop: 15,
  },
  copy: {
    color: "gray",
    marginTop: 1,
  },
  link: {
    color: "green",
  },
});

export default function Inicial(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Aplicativo</Text>
      <Image
        style={{ marginTop: 10, width: 200, height: 200 }}
        source={require("./img-menu/mikael.png")}
      ></Image>
      <Text style={styles.intro}>
        Seja bem-vindo ao aplicativo de agenda! O objetivo do aplicativo é
        proporcionar uma experiência única e informativa para você. Meu nome é
        Mikael Melo e sou desenvolvedor mobile, com formação em Análise e
        Desenvolvimento de Sistemas e Bacharelado em Engenharia de Software. A
        agenda pré-definida fornece informações valiosas, como endereço do
        local, telefone de contato e imagem para referência, para facilitar o
        seu dia-a-dia. Estamos constantemente trabalhando para melhorar e
        adicionar novas funcionalidades para melhor atender às suas
        necessidades.
      </Text>
      <Text style={styles.intro}>
        Se você tiver alguma dúvida ou sugestão, por favor, não hesite em entrar
        em contato comigo clicando nas imagens abaixo.
        <Text style={styles.link}></Text>
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/mikael-melo-095406218/"
            )
          }
        >
          <Image
            style={{ width: 50, height: 50, left: -20 }}
            source={require("./img-menu/linkedin.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto: mikaelsilva1940@hotmail.com")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./img-menu/email.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>Versão 1.0.0</Text>
      <Text style={styles.copy}>Copyright © 2023</Text>
    </View>
  );
}
