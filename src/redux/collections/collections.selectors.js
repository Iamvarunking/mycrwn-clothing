import memoize from 'lodash.memoize' ;
import { createSelector } from 'reselect' ;


const selectCollections = state => state.collections ;


export const selectCollectionsItem = createSelector(
    [selectCollections],
    collection => collection.collections 
);

export const selectCollectionsIntoArray = createSelector(
    [selectCollectionsItem],
    collections => Object.keys(collections).map(key => collections[key])
);
 
export const selectCollection = memoize(collectionUrlParams =>
createSelector(
    [selectCollectionsItem],
    Collections => Collections[collectionUrlParams]
));