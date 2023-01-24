import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
export default function Diversos(props) {
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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51)3723-5939")}
          >
            <Text style={styles.discagem}>ligar para a ferragem</Text>
          </TouchableOpacity>
        </View>

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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51)3530-6737")}
          >
            <Text style={styles.discagem}>Ligar para a Agropecuária</Text>
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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)99738-4307")}
          >
            <Text style={styles.discagem}>Ligar para o restaurante </Text>
          </TouchableOpacity>
        </View>

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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-2503")}
          >
            <Text style={styles.discagem}>Ligar para a churrascaria</Text>
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
