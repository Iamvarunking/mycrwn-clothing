import { createSelector } from 'reselect' ;

const COLLECTION_ID_MAP = {
    hats: 1,
    Sneakers: 2,
    Jackets: 3 ,
    Womens: 4 ,
    Mens: 5
};

const selectCollections = state => state.collections ;


export const selectCollectionsItem = createSelector(
    [selectCollections],
    collection => collection.collections 
);

export const selectCollection = collectionUrlParams =>
createSelector(
    [selectCollectionsItem],
    Collections => Collections.find(collection => collection.id == COLLECTION_ID_MAP[collectionUrlParams])
);