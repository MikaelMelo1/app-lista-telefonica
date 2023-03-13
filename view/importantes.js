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
    width: 200,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
  },
  texto: {
    fontSize: 15,
    color: "white",
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
    marginTop: 10,
    marginBottom: 15,
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
            source={require("./img-menu/caminhao-de-bombeiros.png")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: -10,
              fontWeight: "bold",
            }}
          >
            Bombeiros
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-1102")}
          >
            <Text style={styles.discagem}>Ligar para os bombeiros</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("./img-menu/policia.png")}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: -10,
              fontWeight: "bold",
            }}
          >
            Brigada Militar
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051) 3723-1530")}
          >
            <Text style={styles.discagem}>Ligar para a Brigada Militar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
