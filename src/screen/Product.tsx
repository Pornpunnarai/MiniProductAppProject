import { FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchProducts, Product} from '../service/product-services';
import { RootStackParamList } from '../navigation/type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCard from '../component/ProductCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Product'>;

const ProductScreen = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);


  const getProducts = async () => {
    const response = await fetchProducts();
    if(response.length > 0) {
      setProducts(response);
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    await getProducts();
    setRefreshing(false);
  }

  const renderProductItem = ({item}: {item: Product}) => {
    return (
      <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <ProductCard product={item} navigation={navigation} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        padding: 8,
    },
    row: {
        gap: 8,
    },
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