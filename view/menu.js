import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
              backgroundColor: "#D97DFC",
              alignItems: "center",
              height: 200,
              width: 500,
            }}
          >
            <Image source={require("./mercado.png")} style={styles.image} />
            <Text style={styles.text}>Mercado</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("saude")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#90C022",
              alignItems: "center",
              height: 200,
              width: 500,

            }}
          >
            <Image source={require("./medico.png")} style={styles.image} />
            <Text style={styles.text}>Saúde</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Farmacia")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#FF7062",
              alignItems: "center",
              height: 200,
              width: 500,
            }}
          >
            <Image source={require("./farmacia.png")} style={styles.image} />
            <Text style={styles.text}>Farmácia</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Diversos")}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#14A2FF",
              alignItems: "center",
              height: 200,
              width: 500,
            }}
          >
            <Image source={require("./diversos.png")} style={styles.image} />
            <Text style={styles.text}>Diversos</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
