import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
  xx: {
    color: "#33ff33",
  },
  textoH: {
    fontSize: 15,
    color: "white",
    marginTop: -5,
    marginBottom: 10,
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
});
export default function Farmacia(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("./mercado/supermax.jpg")}
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
            Super Max
          </Text>

          <Text style={styles.texto}>Av. Brasil, 3368 - Marina</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-4183")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./mercado/redesuper.jpg")}
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
            Rede Super
          </Text>

          <Text style={styles.texto}>R. Ernesto Alves, 888 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-1701")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./mercado/redevivo.jpg")}
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
            Rede Vivo
          </Text>
          <Text style={styles.texto}>R. Otto Mernak, 253 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}> 08h00 às 20h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3723-2525")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./mercado/tschiller-7.jpg")}
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
            Tischler - Filial 01
          </Text>

          <Text style={styles.texto}> R. Sete de Setembro, 901 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2191")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./mercado/tschiller-julio.jpg")}
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
            Tischler - Filial 02
          </Text>

          <Text style={styles.texto}>Av. Júlio de Castilhos, 413 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3722-4433")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./mercado/tschiller-avenida.jpg")}
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
            Tischler - Filial 05
          </Text>

          <Text style={styles.texto}>Av. Brasil, 491 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2096")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./mercado/imec.jpg")} style={styles.image} />

          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Imec
          </Text>

          <Text style={styles.texto}>Av. Júlio de Castilhos, 11 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 20h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3723-6633")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
