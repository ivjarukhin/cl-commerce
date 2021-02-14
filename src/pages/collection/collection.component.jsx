import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { firestore } from "../../firebase/firebase.utils";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
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
    <div className="collection-page" >
        <div className="title">{title}</div>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);