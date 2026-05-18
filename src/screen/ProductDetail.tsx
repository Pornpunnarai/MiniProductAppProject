import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../navigation/type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFavoritesStore } from '../store/favoritesStore';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = ({ route }: Props) => {
  const { product } = route.params;
  const favorites = useFavoritesStore(state => state.favorites);
  const addFavorite = useFavoritesStore(state => state.addFavorite);
  const removeFavorite = useFavoritesStore(state => state.removeFavorite);

  const favorited = favorites.some(p => p.id === product.id);

  const handleFavoritePress = () => {
    if (favorited) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Pressable
        style={[styles.favoriteButton, favorited && styles.favoriteButtonActive]}
        onPress={handleFavoritePress}
      >
        <Text style={styles.favoriteButtonText}>
          {favorited ? '♥ Remove from Favorites' : '♡ Add to Favorites'}
        </Text>
      </Pressable>
      <Text style={styles.description}>Description: {product.description}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.rating}>Rating: {product.rating.rate}</Text>
      <Text style={styles.ratingCount}>Rating Count: {product.rating.count}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  favoriteButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#ffe0e0',
  },
  favoriteButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  category: {
    fontSize: 14,
    marginTop: 10,
  },
  rating: {
    fontSize: 14,
    marginTop: 10,
  },
  ratingCount: {
    fontSize: 14,
    marginTop: 10,
  },
})