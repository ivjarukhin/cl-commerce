import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
//import { firestore } from "../../firebase/firebase.utils";
import { selectCollection } from "../../redux/shop/shop.selectors";

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles';

export const CollectionPage = ({ collection }) => {
    // useEffect(() => {
    //     const unsubscribeFromCollections = firestore
    //     .collection("collections")
    //     .onSnapshot(snapshot => console.log(snapshot));

    //     return () => {
    //         unsubscribeFromCollections();
    //     }
    // }, []);

    const {title, items} = collection;
    return (
    <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);