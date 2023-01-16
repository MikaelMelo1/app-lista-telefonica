import React from "react";
import {
  Text,
  View,
  Button,
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
            style={styles.image}
            source={{
              uri: "https://www.cachoeiradosul.rs.gov.br/fotos/25a653e4c2ec516e1e021f527140dd87.jpg",
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
            Hospital da Liga
          </Text>
          <Text style={styles.texto}> R. Milan Krás - Barcelos</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3724-6004")}
          >
            <Text style={styles.discagem}>LIGAR PARA O HOSPITAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://ocorreio.com.br/wp-content/uploads/2020/07/hospital.jpg",
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
            Hospital de Cariedade e Beneficência
          </Text>

          <Text style={styles.texto}> Rua Saldanha Marinho, 48 - Centro</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-0800")}
          >
            <Text style={styles.discagem}>LIGAR PARA O HOSPITAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: "https://ocorreio.com.br/wp-content/uploads/2022/06/UPA-fachada.jpg",
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
            UPA
          </Text>

          <Text style={styles.texto}>
            Rua Avenidade Brasil, 2300 - Oliveira
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(51) 3722-0888")}
          >
            <Text style={styles.discagem}>Ligar para A UPA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./sus-simbolo.png")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Posto de Saúde - US1
          </Text>

          <Text style={styles.texto}>Rua Gal Portinho, 1785 - Centro</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:3723-1364")}>
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./sus-simbolo.png")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Posto de Saúde - US4
          </Text>
          <Text style={styles.texto}>
            Rua Leopoldo Souza, 1448 - Centro Social Urbano
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37246071")}>
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./sus-simbolo.png")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Posto de Saúde - US14
          </Text>

          <Text style={styles.texto}>Rua Av dos Imigrantes - Marina</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37232754")}>
            <Text style={styles.discagem}>Ligar o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./sus-simbolo.png")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Posto de Saúde - ESF1
          </Text>
          <Text style={styles.texto}>
            Rua Quadra 12, Casa 10 e 11 - Promorar
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37246072")}>
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./sus-simbolo.png")} style={styles.image} />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Posto de Saúde - CAPS II
          </Text>
          <Text style={styles.texto}>Rua Marechal Floriano, 207</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:37246112")}>
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
