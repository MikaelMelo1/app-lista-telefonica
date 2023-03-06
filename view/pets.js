import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//const farmacia1 = 'https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1'
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
  },
  card: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 10,
    backgroundColor: "black",
  },
  image: {
    marginTop: 10,
    width: 250,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
  },
  texto: {
    fontSize: 15,
    color: "white",
    marginTop: 1,
    marginBottom: 10,
  },
  textoH: {
    fontSize: 15,
    color: "white",
    marginTop: -5,
    marginBottom: 10,
    lineBreakMode: "tail",
    textAlign: "center",
  },
  discagem: {
    fontSize: 15,
    color: "white",
    marginTop: 1,
    marginBottom: 10,
    textTransform: "uppercase",
    backgroundColor: "red",
    padding: 7,
  },
  xx: {
    color: "#33ff33",
  },
});
export default function Farmacia(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./diversos/pecuaria-guri.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Agropecuária Guri
          </Text>

          <Text style={styles.texto}>Rua Ramiro Barcelos - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}> 08h30 às 19h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51)3530-6737")}
          >
            <Text style={styles.discagem}>Ligar para a Agropecuária</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./diversos/veterinaria-salomão.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Clínica Veterinaria Dr. Edson Luiz Salomão
          </Text>

          <Text style={styles.texto}>Rua Moron, 1376 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h30 às 12h00{"\n"}13h30 às 18h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-1807")}
          >
            <Text style={styles.discagem}>Ligar para a Veterinária</Text>
          </TouchableOpacity>
        </View>           
           </View>
    </ScrollView>
  );
}
