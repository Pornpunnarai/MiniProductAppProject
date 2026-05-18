import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, Pressable } from "react-native";
import ProductScreen from "../screen/Product";
import ProductDetailScreen from "../screen/ProductDetail";
import { RootStackParamList } from "./type";
import FavoritesScreen from "../screen/Favorites";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({ navigation }) => ({
          title: "Products",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Favorites")}
              style={styles.favoriteButton}
            >
              <Text style={styles.favoriteButtonText}>
                ♥ 
              </Text>
            </Pressable>
          ),  
        })}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButtonText: {
    fontSize: 25,
    fontWeight: "600",
    color: "red",
  },
});