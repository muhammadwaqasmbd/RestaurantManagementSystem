import React from 'react';
import ProductMenuPage from "./ProductMenu";
import './css/orderme-style.css';
import 'croppie/croppie.css'

class TopBanner extends React.Component {
    render() {
        return(
                <div id="customerwrapper" style={{textAlign:"left"}}>

                    <ProductMenuPage />
                </div>

        )

    }
}

export default TopBanner;
