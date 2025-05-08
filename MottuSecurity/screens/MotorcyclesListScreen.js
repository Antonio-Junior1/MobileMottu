import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';

const motorcyclesData = [
  { 
    id: '1', 
    model: 'CB 300', 
    brand: 'Honda', 
    year: '2023', 
    plate: 'ABC1D23',
    image: require('../assets/images/E-1.webp') 
  },
  { 
    id: '2', 
    model: 'MT-03', 
    brand: 'Yamaha', 
    year: '2022', 
    plate: 'XYZ9W87',
    image: require('../assets/images/E-1.webp') 
  },
  { 
    id: '3', 
    model: 'Z400', 
    brand: 'Kawasaki', 
    year: '2021', 
    plate: 'DEF4G56',
    image: require('../assets/images/E-1.webp') 
  },
];

const MotorcyclesListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.motorcycleCard}
      onPress={() => navigation.navigate('MotorcycleDetail', { motorcycle: item })}
    >
      <Image source={item.image} style={styles.motorcycleImage} />
      <View style={styles.motorcycleInfo}>
        <Text style={styles.motorcycleModel}>{item.brand} {item.model}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>{item.year}</Text>
          <Text style={styles.detailText}>Placa: {item.plate}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[colors.primary[900], colors.primary[800]]}
      style={styles.container}
    >
      <FlatList
        data={motorcyclesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Motos Cadastradas</Text>
            <Text style={styles.subtitle}>Total: {motorcyclesData.length}</Text>
          </View>
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary[500],
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
  motorcycleCard: {
    backgroundColor: colors.primary[700],
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  motorcycleImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  motorcycleInfo: {
    flex: 1,
  },
  motorcycleModel: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: colors.text.secondary,
    fontSize: 14,
  },
});

export default MotorcyclesListScreen;