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
      <TouchableOpacity onPress={() => props.navigation.navigate("bares")}>
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
              source={require("./img-menu/bar.png")}
              style={styles.image}
            />
            <Text style={styles.text}>BARES</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("alimentacao")}
      >
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#339933",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/comida.png")}
              style={styles.image}
            />
            <Text style={styles.text}>ALIMENTAÇÃO</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("ferragens")}>
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
              source={require("./img-menu/parafuso.png")}
              style={styles.image}
            />
            <Text style={styles.text}>
              FERRAGENS {"\n"}E MATERIAIS DE CONSTRUÇÃO{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("pets")}>
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
              source={require("./img-menu/pets.png")}
              style={styles.image}
            />
            <Text style={styles.text}>PETS</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("lojas")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#CC6600",
              alignItems: "center",
              height: 200,
            }}
          >
            <Image
              source={require("./img-menu/loja-de-roupas.png")}
              style={styles.image}
            />
            <Text style={styles.text}>LOJAS</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
