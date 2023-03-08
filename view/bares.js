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
          <Image source={require("./bar/butiquim.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Butiquim bar e espetaria
          </Text>

          <Text style={styles.texto}>Rua Ernesto Alves, 837 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>18h00 às 02h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)2023-0283")}
          >
            <Text style={styles.discagem}>Ligar para o bar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./bar/aquece.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Aquece Pub
          </Text>

          <Text style={styles.texto}>Rua David Barcelos, 860 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>18h00 às 04h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3722-7092")}
          >
            <Text style={styles.discagem}>Ligar para o bar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./bar/role.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Rolê Pub e Lanches
          </Text>

          <Text style={styles.texto}>Rua Mal. Floriano, 248 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>18h00 às 02h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99708-4712")}
          >
            <Text style={styles.discagem}>Ligar para o bar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./bar/bigorna.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Boteco do Bigorna
          </Text>

          <Text style={styles.texto}>Rua David Barcelos, 899 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>16h00 às 03h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99923-7355")}
          >
            <Text style={styles.discagem}>Ligar para o bar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./bar/london.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            London Pub 584
          </Text>

          <Text style={styles.texto}>Rua Bento Gonçalves, 584 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>19h00 às 00h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99595-5040")}
          >
            <Text style={styles.discagem}>Ligar para o bar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
