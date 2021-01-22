import React from 'react' ;
import './collection.styles.scss' ;
import { connect } from 'react-redux' ;
import { selectCollection } from '../../redux/collections/collections.selectors' ;

const CollectionPage = ({ collection }) => {
console.log(collection);
return(
    <div>
        <h2>Category Page</h2>
    </div>
)};

const mapStateToProps = (state,ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage) ;
