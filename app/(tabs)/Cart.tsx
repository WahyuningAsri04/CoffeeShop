import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const cartItems = [
  { id: '1', name: 'Cherry Milkshake', quantity: 1, price: 5.5 },
  { id: '2', name: 'Cherry Milkshake', quantity: 3, price: 5.5 },
];

export default function Cart() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.quantity} x {item.price}K</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.summary}>
        <Text>Total: 31.4K</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text>Checkout</Text>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  summary: {
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButton: {
    padding: 15,
    backgroundColor: '#b5651d',
    borderRadius: 5,
    marginTop: 10,
  },
});
