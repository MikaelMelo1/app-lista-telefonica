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
    borderRadius: 20,
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
export default function Farmacia(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("./farmacia/saojoao-7.jpg")}
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
            Farmácia São João
          </Text>
          <Text style={styles.texto}>Rua Sete de Setembro, 1265 - Centro</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37227070")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./farmacia/ultramed-7.jpg")}
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
            Farmacia UltraMed Popular
          </Text>

          <Text style={styles.texto}>Rua Sete de Setembro, 1001 - Centro</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:35306037")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./farmacia/panvel.jpg")}
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
            Farmacia Panvel
          </Text>

          <Text style={styles.texto}>Rua Sete de Setembro, 1109 - Centro</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:0800 642 9001")}
          >
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./farmacia/brasilpopular.jpg")}
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
            Farmacia Brasil Popular
          </Text>

          <Text style={styles.texto}>Rua Sete de Setembro, 1402 - Centro</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:20230387")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./farmacia/saojoao-julio.jpg")}
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
            Farmacia São João
          </Text>

          <Text style={styles.texto}>
            Rua Av. Júlio de Castilhos, 683 - Centro
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37235940")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 10,
            width: 160,
          }}
        ></View>

        <View style={styles.card}>
          <Image
            source={require("./farmacia/drogaraia.jpg")}
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
            Farmacia Droga Raia
          </Text>

          <Text style={styles.texto}>Rua Saldanha Marinho, 1350 - Centro</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:980405382")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 10,
            width: 160,
          }}
        ></View>
      </View>
    </ScrollView>
  );
}
