import React from 'react' 
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Product } from '../service/product-services';

const ProductCard = ({ product, navigation }: { product: Product, navigation: any }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: product })}>
      <Image source={{uri: product.image}} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 8,
        fontSize: 12,
    },
    price: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: '600',
    },
})