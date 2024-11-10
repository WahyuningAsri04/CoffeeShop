import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/milkshake.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Cherry Milk Shake</Text>
      <Text style={styles.description}>
        Ingredients: Vanilla ice cream, milk, maraschino cherries.
      </Text>

      <View style={styles.flavorOptions}>
        <Text>Flavor</Text>
        <TouchableOpacity style={styles.option}>
          <Text>Sugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Foam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Caramel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orderType}>
        <Text>Order Type</Text>
        <TouchableOpacity style={styles.option}>
          <Text>Onsite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Takeaway</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  flavorOptions: {
    marginVertical: 20,
  },
  option: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginVertical: 5,
  },
  orderType: {
    marginVertical: 20,
  },
  addToCart: {
    padding: 15,
    backgroundColor: '#b5651d',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});
