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
export default function Farmacia(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://ocorreio.com.br/wp-content/uploads/2019/03/superm2.jpg",
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
            Super Max
          </Text>

          <Text style={styles.texto}>Av. Brasil, 3368 - Marina</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-4183")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./redesuper.jpg")} style={styles.image} />
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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3724-1701")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://adm.gvcfm.com.br/arquivos/blog/e55265e97ba3a975fd258bba14fb96d8-gvc-fm.JPG",
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
            Rede Vivo
          </Text>

          <Text style={styles.texto}>R. Otto Mernak, 253 - Centro</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3723-2525")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./tischiler.png")} style={styles.image} />
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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-2191")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./tischiler.png")} style={styles.image} />

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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-4433")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./tischiler.png")} style={styles.image} />

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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-2096")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 10,
            width: 160,
          }}
        ></View>

        <View style={styles.card}>
          <Image source={require("./tischiler.png")} style={styles.image} />

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
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-4433")}
          >
            <Text style={styles.discagem}>Ligar para o mercado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
