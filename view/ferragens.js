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
            source={require("./diversos/ferragem-sa.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Ferragem Santo Antônio
          </Text>

          <Text style={styles.texto}>Rua Saldanha Marinho, 1233 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h15 às 11h45{"\n"}13h30 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3723-5939")}
          >
            <Text style={styles.discagem}>ligar para a ferragem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./ferragem/rother.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Ferragem Rother Herzog Ltda
          </Text>

          <Text style={styles.texto}>Av. Júlio de Castilhos, 243 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 12h00{"\n"}13h30 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2245")}
          >
            <Text style={styles.discagem}>ligar para a ferragem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./ferragem/horbach.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Ferragem Horbach
          </Text>

          <Text style={styles.texto}>Rua Aparicio Borges, 1130 - São José</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-1573")}
          >
            <Text style={styles.discagem}>ligar para a ferragem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./ferragem/sanmartin.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Casa Sanmartin
          </Text>

          <Text style={styles.texto}>Av. Brasil, 396 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-3750")}
          >
            <Text style={styles.discagem}>ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./ferragem/obraprima.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Obra Prima
          </Text>

          <Text style={styles.texto}>
            Rua Conde de Porto Alegre, 910 - Marques Ribeiro
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-1087")}
          >
            <Text style={styles.discagem}>ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./ferragem/joaosimao.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            João Simão
          </Text>

          <Text style={styles.texto}>Rua Av. Brasil, 950 - São José</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 12h00 {"\n"} 13h35 às 17h45</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2835")}
          >
            <Text style={styles.discagem}>ligar para a LOJA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
