import { Product } from "../service/product-services";

export type RootStackParamList = {
    Product: undefined;
    ProductDetail: { product: Product };
    Favorites: undefined;
};