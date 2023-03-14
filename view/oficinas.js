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
          <Image source={require("./oficina/joao.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Oficina do Joãozinho
          </Text>
          <Text style={styles.texto}>
            Rua Barão de Viamão, 1310 - São José{" "}
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              08h00 às 19h00
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3630-0413")}
          >
            <Text style={styles.discagem}>Ligar para a oficina</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.card}>
          <Image source={require("./oficina/shneider.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Schneider Autocenter
          </Text>
          <Text style={styles.texto}>
            Av. João Neves da Fontoura, 2696 - Nossa Sra. Fatima
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              08h00 às 12h00 {"\n"}
              14h00 às 18h00
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-4887")}
          >
            <Text style={styles.discagem}>Ligar para a oficina</Text>
          </TouchableOpacity>
        </View>




        <View style={styles.card}>
          <Image source={require("./oficina/motosport.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Moto Sport
          </Text>
          <Text style={styles.texto}>
            Av. Presidente Vargas, 446 - Barcelos
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              08h00 às 20h00
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99663-6034")}
          >
            <Text style={styles.discagem}>Ligar para a oficina</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.card}>
          <Image source={require("./oficina/planeta.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Planet Motos
          </Text>
          <Text style={styles.texto}>
            Av. Brasil, 1078 - Centro
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              08h00 às 18h00
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3724-3272")}
          >
            <Text style={styles.discagem}>Ligar para a oficina</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.card}>
          <Image source={require("./oficina/guincho.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Puma Guincho
          </Text>
          <Text style={styles.texto}>
            Rua Antônio Eusébio da Fontoura, 481 - Santa Helena
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              Aberto 24 horas
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99368-3747")}
          >
            <Text style={styles.discagem}>Ligar para o guincho</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.card}>
          <Image source={require("./oficina/pcguincho.jpg")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Cachoeira Guinchos PC
          </Text>
          <Text style={styles.texto}>
            Rua Ivo Becker, 835 - Santa Helena
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>
              Aberto 24 horas
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99712-4295")}
          >
            <Text style={styles.discagem}>Ligar para o guincho</Text>
          </TouchableOpacity>
        </View>



      </View>
    </ScrollView>
  );
}
