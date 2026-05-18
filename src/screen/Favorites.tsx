import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFavoritesStore } from '../store/favoritesStore';
import ProductCard from '../component/ProductCard';
import { RootStackParamList } from '../navigation/type';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

const FavoritesScreen = ({ navigation }: Props) => {
    const favorites = useFavoritesStore(state => state.favorites);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
        <FlatList
            data={favorites}
            renderItem={({item}) => <ProductCard product={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContent}
        />
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listContent: {
        padding: 8,
    },
    row: {
        gap: 8,
    },
})