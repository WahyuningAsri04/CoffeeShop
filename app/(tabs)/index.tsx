import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Smoothie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Tea</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Milk Shake</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Pressed Juice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text>Breakfast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
