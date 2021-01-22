import React from 'react' ;
import CollectionPreview from '../collection-preview/collection-preview.component' ;
import { connect } from 'react-redux' ;
import { createStructuredSelector } from 'reselect' ;
import { selectCollectionsItem } from '../../redux/collections/collections.selectors' ;
import './collection-overview.styles.scss' ;

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'> 
        {
         collections.map(({id, ...otherCollectionProps})  => ( 
             <CollectionPreview key={id} {...otherCollectionProps} /> 
             ))
         }
    </div>

);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsItem
});

export default connect(mapStateToProps)(CollectionOverview)