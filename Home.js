import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Estilo';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo à Home!</Text>
      <Text style={styles.descricao}>Você navegou da tela Login para a tela Home.</Text>
      <View style={styles.botao}><Button title="Voltar ao Login" color="#007AFF" onPress={() => navigation.navigate('Login')} /></View>
    </View>
  );
}
