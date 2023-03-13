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
            source={require("./diversos/restaurante-querencia.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Churrascaria Querência
          </Text>

          <Text style={styles.texto}>Av. Júlio de Castilhos, 217 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:
            <Text style={styles.xx}> 11h00 às 14h00{"\n"}19h00 às 22h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2503")}
          >
            <Text style={styles.discagem}>Ligar para o restaurante</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./diversos/dom-chico.jpeg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Dom Chico Bar e Restaurante
          </Text>

          <Text style={styles.texto}>Tv. Francisco Gama, 79 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>19h30 às 23h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)99738-4307")}
          >
            <Text style={styles.discagem}>Ligar para o restaurante </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/elfogon.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            El Fogón
          </Text>

          <Text style={styles.texto}>
            Rua Sen. Pinheiro Machado, 1912 - Marques Ribeiro
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>19h30 às 23h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-1121")}
          >
            <Text style={styles.discagem}>Ligar para o restaurante </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/sushi-bar.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Vício Sushi Bar
          </Text>

          <Text style={styles.texto}>Rua Ramiro Barcelos, 2500 - Augusta</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>18h00 às 22h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3530-6360")}
          >
            <Text style={styles.discagem}>Ligar para o Sushi Bar </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/yakusoki.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Yakusoku Cozinha Oriental
          </Text>

          <Text style={styles.texto}>Rua Aníbal Loreiro, 100 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>19h00 às 23h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-8065")}
          >
            <Text style={styles.discagem}>Ligar para o Yakusoku </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/santamaria.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Restaurante e Lancheria Santa Maria
          </Text>

          <Text style={styles.texto}>
            Avenida, Av. Júlio de Castilhos, 160 - Centro
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>11h00 às 14h00{"\n"}18h00 às 00h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3722-3746")}
          >
            <Text style={styles.discagem}>Ligar para o restaurante </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/digos.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Digos Lanches
          </Text>

          <Text style={styles.texto}>Rua Duque de Caxias, 1467 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>11h30 às 13h30{"\n"}17h30 às 00h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-9072")}
          >
            <Text style={styles.discagem}>Ligar para o Digos </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/acai.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            La Fruta Açai
          </Text>

          <Text style={styles.texto}>Rua Major Ouriques, 1270 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>12h00 às 21h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-9072")}
          >
            <Text style={styles.discagem}>Ligar para o La Fruta </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/smurfete.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Açai da Smurfette
          </Text>

          <Text style={styles.texto}>
            Rua Fontoura Xavier - Franceschin, 172
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>14h00 às 22h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 99540-4829")}
          >
            <Text style={styles.discagem}>Ligar para Açai da Smurfette </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./alimentacao/eskimo.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Eskimó Sorvetes
          </Text>

          <Text style={styles.texto}>Av. Júlio de Castilhos, 825 - Centro</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>10h00 às 12h00{"\n"}13h30 às 21h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 2023-0474")}
          >
            <Text style={styles.discagem}>Ligar para a Eskimó </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
