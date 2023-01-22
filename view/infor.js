import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from 'react-native-vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    color: '#6200ee',
    fontWeight: 'bold'
  },
  intro: {
    fontSize: 16,
    
    marginTop: 8,
    textAlign: 'justify'
  },
  version: {
    color: 'gray',
    marginTop: 50,
  },
  copy: {
    color: "gray",
    marginTop: 5
  },
  link: {
    color: 'green'
  }

  
});

export default function Inicial(props) {
  return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Sobre o Aplicativo</Text>
    <Image style={{marginTop:10,width: 200, height: 200}} source={require("./img-menu/mikael.png")}></Image>
    <Text style={styles.intro}>Seja bem-vindo ao nosso aplicativo de agenda 
    ! Desenvolvi este aplicativo com o objetivo de proporcionar 
    uma experiência única e informativa. Meu nome é Mikael Melo, sou desenvolvedor
     mobile formado em 
    Análise e Desenvolvimento de Sistemas e Bacharelado em Engenharia de 
    Software. Nossa agenda pré-definida fornece informações valiosas, como
     endereço do local, telefone de contato e imagem para referência, assim,
     facilitando seu dia-á-dia. 
     Estamos constantemente trabalhando para melhorar e adicionar novas 
     funcionalidades para melhor atender às suas necessidades.
    
</Text>
<Text style={styles.intro}>
          Se você tiver alguma dúvida ou sugestão, por favor, não hesite em entrar em contato comigo pelo linkedin <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/mikael-melo-095406218/')}>Mikael Melo </Text> 
           ou pelo email <Text style={styles.link} onPress={() => Linking.openURL('malito: mikaelsilva1940@hotmail.com')}>mikaelsilva1940@hotmail.com</Text>
        </Text>
       
        <Text style={styles.version}>Versão 1.0.0</Text>
        <Text style={styles.copy}>Copyright © 2023</Text>
    
  </View>
  );
};