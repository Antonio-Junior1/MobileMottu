import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button';
import colors from '../theme/colors';

const MotorcycleRegisterScreen = () => {
  const [form, setForm] = useState({
    model: '',
    brand: '',
    year: '',
    plate: '',
    branch: '',
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', form);
    // Aqui você faria a chamada para sua API
  };

  return (
    <LinearGradient
      colors={[colors.primary[900], colors.primary[800]]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Cadastro de Moto</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Modelo</Text>
          <TextInput
            style={styles.input}
            value={form.model}
            onChangeText={(text) => handleChange('model', text)}
            placeholder="Ex: CB 300"
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Marca</Text>
          <TextInput
            style={styles.input}
            value={form.brand}
            onChangeText={(text) => handleChange('brand', text)}
            placeholder="Ex: Honda"
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={styles.input}
            value={form.year}
            onChangeText={(text) => handleChange('year', text)}
            placeholder="Ex: 2023"
            placeholderTextColor={colors.text.secondary}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Placa</Text>
          <TextInput
            style={styles.input}
            value={form.plate}
            onChangeText={(text) => handleChange('plate', text)}
            placeholder="Ex: ABC1D23"
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Filial</Text>
          <TextInput
            style={styles.input}
            value={form.branch}
            onChangeText={(text) => handleChange('branch', text)}
            placeholder="Ex: Matriz - Centro"
            placeholderTextColor={colors.text.secondary}
          />
        </View>
        
        <Button 
          title="Cadastrar Moto"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary[500],
    marginBottom: 30,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: colors.text.primary,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: colors.primary[700],
    borderRadius: 8,
    padding: 14,
    color: colors.text.primary,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.primary[600],
  },
  submitButton: {
    marginTop: 20,
  },
});

export default MotorcycleRegisterScreen;