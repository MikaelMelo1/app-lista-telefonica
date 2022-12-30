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
export default function Diversos(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Farmacia Matriz
          </Text>

          <Text style={styles.texto}>Rua Juvencio Cardoso da Cunha</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:1234567890")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Farmacia Matriz
          </Text>

          <Text style={styles.texto}>Rua Juvencio Cardoso da Cunha</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:1234567890")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Farmacia Matriz
          </Text>

          <Text style={styles.texto}>Rua Juvencio Cardoso da Cunha</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:1234567890")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Farmacia Matriz
          </Text>

          <Text style={styles.texto}>Rua Juvencio Cardoso da Cunha</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:1234567890")}>
            <Text style={styles.discagem}>Ligar para a Farmácia</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i0.wp.com/ascoferj.com.br/wp-content/uploads/2022/04/sao-joao-Imbe-01.jpeg?fit=1280%2C960&ssl=1",
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Farmacia Matriz
          </Text>

          <Text style={styles.texto}>Rua Juvencio Cardoso da Cunha</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:1234567890")}>
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
