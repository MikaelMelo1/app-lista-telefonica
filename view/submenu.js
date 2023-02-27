import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
  },
  /*imageContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    height: 200,
    width: 500,*/ //foi usado direto no elemento para cuidar as

  image: {
    height: 50,
    width: 50,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default function Menu(props) {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Supermercados")}
      >
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#FF7F50",
              textAlign: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/mercado.png")}
              style={styles.image}
            />
            <Text style={styles.text}>BARES</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("saude")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#00FFFF",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/medico.png")}
              style={styles.image}
            />
            <Text style={styles.text}>FERRAGENS</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Farmacia")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "red",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/farmacia.png")}
              style={styles.image}
            />
            <Text style={styles.text}>RESTAURANTES</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Diversos")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "blue",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/diversos.png")}
              style={styles.image}
            />
            <Text style={styles.text}>PETS</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
