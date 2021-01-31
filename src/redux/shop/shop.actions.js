import ShopActionTypes from "./shop.types";

export const updateCollections = (collectiionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectiionsMap
});