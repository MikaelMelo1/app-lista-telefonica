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
  xx: {
    color: "#33ff33",
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
            source={require("./saude/hospital-liga.jpg")}
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
            Hospital da Liga
          </Text>
          <Text style={styles.texto}> R. Milan Krás - Barcelos</Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 17h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-6004")}
          >
            <Text style={styles.discagem}>LIGAR PARA O HOSPITAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./saude/hcb.jpg")} style={styles.image} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:
            <Text style={styles.xx}> Aberto 24 horas</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-0800")}
          >
            <Text style={styles.discagem}>LIGAR PARA O HOSPITAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image style={styles.image} source={require("./saude/upa.jpg")} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>Aberto 24 horas</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3722-0888")}
          >
            <Text style={styles.discagem}>Ligar para A UPA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./saude/us1.jpeg")} style={styles.image} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 12h00{"\n"} 13h30 às 17h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-6100")}
          >
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./saude/us4.jpg")} style={styles.image} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}> 08h00 às 12h00{"\n"} 13h30 às 17h30</Text>
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-6071")}
          >
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./saude/us14.jpg")} style={styles.image} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 12h00{"\n"}13h30 às 17h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3723-2754")}
          >
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("./saude/sus-simbolo.png")}
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
            Posto de Saúde - ESF1
          </Text>
          <Text style={styles.texto}>
            Rua Quadra 12, Casa 10 e 11 - Promorar
          </Text>
          <Text style={styles.textoH}>
            Horário de Atendimento:
            <Text style={styles.xx}> 08h00 às 12h00{"\n"}13h30 às 16h30</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-6072")}
          >
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require("./saude/caps2.jpg")} style={styles.image} />
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
          <Text style={styles.textoH}>
            Horário de Atendimento:{" "}
            <Text style={styles.xx}>08h00 às 12h00{"\n"}13h30 às 18h00</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("tel:(051)3724-6112")}
          >
            <Text style={styles.discagem}>Ligar para o posto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
