import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary[900], colors.primary[800]]}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Mottu Manager</Text>
          
          <Button 
            title="Ver Filiais"
            onPress={() => navigation.navigate('Branches')}
            style={styles.button}
          />
          
          <Button 
            title="Cadastrar Moto"
            onPress={() => navigation.navigate('MotorcycleRegister')}
            style={styles.button}
          />
          
          <Button 
            title="Lista de Motos"
            onPress={() => navigation.navigate('MotorcyclesList')}
            style={styles.button}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.secondary[500],
    marginVertical: 30,
    textShadowColor: colors.secondary[500],
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  button: {
    width: '80%',
    marginVertical: 15,
  },
});

export default HomeScreen;