import React from 'react';
import ProductMenuPage from "./ProductMenu";
import './css/orderme-style.css';
import 'croppie/croppie.css'
import NavigationMenu from "./nav";

class TopBanner extends React.Component {
    render() {
        return(
                <div id="customerwrapper" style={{textAlign:"left"}}>
                    <NavigationMenu/>
                    <ProductMenuPage />
                </div>

        )

    }
}

export default TopBanner;
