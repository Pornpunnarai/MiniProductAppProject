import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '../service/product-services';

type FavoritesState = {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    set => ({
      favorites: [],
      addFavorite: (product: Product) =>
        set(state => {
          const alreadyAdded = state.favorites.some(p => p.id === product.id);
          if (alreadyAdded) {
            return state;
          }
          return { favorites: [...state.favorites, product] };
        }),

      removeFavorite: (id: number) =>
        set(state => ({
          favorites: state.favorites.filter(p => p.id !== id),
        })),
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
