import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';

import  ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';


const ProductsNavigator = createStackNavigator  ({
    ProductsOverview : ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerBackTitleStyle : {
            fontFamily:'open-sans-bold'
        },
        headerTitleStyle: {
            fontFamily:'open-sans-bold'
        },
        headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primary
    }
}
);

export default createAppContainer(ProductsNavigator);