import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  titulo: {
    color: "white",
    fontSize: 20,
  },
  subtitulo: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  span: {
    color: "yellow",
  },
  botao: {
    marginTop: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: 600,
  },
  botaoF: {
    position: "absolute",
    color: "white",
    fontSize: 20,
  },
  infor: {
    position: "absolute",
    top: -400,
    left: 150,
  },
});

export default function Inicial(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img-menu/background.png")}
        style={styles.imageBackground}
      >
        <Image
          source={require("./img-menu/icon.png")}
          style={{
            height: 250,
            width: 300,
            marginBottom: 2,
            marginRight: 30,
          }}
        ></Image>
        <Text style={styles.titulo}>
          Bem Vindo ao Agenda <Text style={styles.span}>Cachoeira do Sul</Text>
        </Text>
        <Text style={styles.subtitulo}></Text>
        <View style={styles.botao}>
          <TouchableOpacity onPress={() => props.navigation.navigate("menu")}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                height: 50,
                width: 150,
                display: "flex",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  justifyContent: "center",
                }}
              >
                INICIAR AGENDA
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate("infor")}>
          <View style={{ padding: 20 }}>
            <MaterialIcons
              style={styles.infor}
              name="info"
              size={40}
              color="white"
            ></MaterialIcons>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
