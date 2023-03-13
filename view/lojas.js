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
          <Image source={require("./lojas/benoit.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Lojas Benoit
          </Text>
          <Text style={styles.texto}>
            Av. Júlio de Castilhos, 275 - Centro{" "}
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              08h45 às 12h00 {"\n"}
              13h45 às 18h15
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99325-1446")}
          >
            <Text style={styles.discagem}>Ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./lojas/dullius.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Lojas Dullius
          </Text>
          <Text style={styles.texto}>Rua Saldanha Marinho, 1341 - Centro </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>09h00 às 19h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-8323")}
          >
            <Text style={styles.discagem}>Ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./lojas/colombo.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Lojas Colombo
          </Text>
          <Text style={styles.texto}>
            Av. Júlio de Castilhos, 187 - Centro{" "}
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h30 às 12h00 {"\n"} 13h30 às 18h0 </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3722-1110")}
          >
            <Text style={styles.discagem}>Ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./lojas/bahia.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Casas Bahia
          </Text>
          <Text style={styles.texto}>
            Av. Júlio de Castilhos, 136 - Centro{" "}
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>09h00 às 18h30min </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3722-9800")}
          >
            <Text style={styles.discagem}>Ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./lojas/magazine.jpg")}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Magazine Luiza
          </Text>
          <Text style={styles.texto}>
            Av. Júlio de Castilhos, 474 - Centro{" "}
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              09h00 às 12h00 {"\n"}
              13h30 às 18h00
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3724-8600")}
          >
            <Text style={styles.discagem}>Ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
