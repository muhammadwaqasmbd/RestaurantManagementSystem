import React from 'react';
import RestaurantBanner from "./RestaurantBanner";
import ProductMenuPage from "./ProductMenu";
import Navigation from "./Nav";
import './css/orderme-style.css';
import 'croppie/croppie.css'

class TopBanner extends React.Component {
    render() {
        return(
                <div id="customerwrapper" style={{textAlign:"left"}}>
                    <RestaurantBanner />
                    <Navigation/>
                    <ProductMenuPage />
                </div>

        )

    }
}

export default TopBanner;
