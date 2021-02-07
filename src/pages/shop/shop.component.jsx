import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";

import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();


        //this.unsubsribeFromSnapshot = collectionRef.onSnapshot( async snapShot =>


        // fetch('https://firestore.googleapis.com/v1/projects/compr_db/databases/(default)/documents/collections')
        // .then(response => response.json())

    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);