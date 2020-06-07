import React from "react";
import {compose} from 'recompose';
import {Link, withRouter} from "react-router-dom";
import { ReactComponent as SearchIcon } from './img/search.svg';
import {ReactComponent as BillLogo} from "./img/bill.svg";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        var totalCount = 0;
        var totalPrice = 0.0;
        var cart = []
        this.state = {
            response : {},
            filteredOrderedProducts : '',
            inputRef: React.createRef(),
            data : {},
            lat: 0.0,
            lng : 0.0
        };
        this.renderData = this.renderData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        var lat = 0.0;
        var lng = 0.0;
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
            let self = this;
            var geolocation = navigator.geolocation.watchPosition(function(position) {
                clearTimeout(location_timeout);

                lat = position.coords.latitude;
                lng = position.coords.longitude;
                self.setState({
                    lat:lat,
                    lng:lng
                })
                localStorage.removeItem("lat")
                localStorage.removeItem("lng")
                localStorage.setItem("lat",self.state.lat);
                localStorage.setItem("lng",self.state.lng);
                console.log("lat local: ", localStorage.getItem("lat"))
                console.log("lng local: ", localStorage.getItem("lng"))
                self.fetchData();
            }, function(error) {
                clearTimeout(location_timeout);
                console.log("error in fetching geolocation")
            });
            window.setTimeout( function () {
                    navigator.geolocation.clearWatch( geolocation )
                },
                1000 //stop checking after 5 seconds
            );
        } else {
            // Fallback for no geolocation
            console.log("no geolocation")
        }
        //localStorage.removeItem("cart")
        //localStorage.removeItem("totalPrice")
        //localStorage.removeItem("totalCount")
        console.log("localstorage cart: ", localStorage.getItem("cart"))
        console.log("totalPrice", localStorage.getItem("totalPrice"))
        console.log("totalCount", localStorage.getItem("totalCount"))
        console.log("orderId", localStorage.getItem("orderId"))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.restorePosition) {
            const element = document.getElementById(this.state.restorePosition);
            if (element) {
                this.setState({'restorePosition': ''});
                const elementRect = element.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middle = absoluteElementTop - (window.innerHeight / 3);
                window.scrollTo(0, middle);
            }
        }
    }

    fetchData(){
        let path = this.props.location.pathname;
        let qrcode = '';
        if(!isNaN(path.substring(path.length - 8))){
            qrcode = path.substring(path.length - 8)
        }else if(!isNaN(path.substring(path.length - 7))){
            qrcode = path.substring(path.length - 7)
        }else if(!isNaN(path.substring(path.length - 6))){
            qrcode = path.substring(path.length - 6)
        }else if(!isNaN(path.substring(path.length - 4))){
            qrcode = path.substring(path.length - 4)
        }
        localStorage.setItem("qrcode",qrcode)
        console.log("fetching products");
        let headers = {}
        let lat = this.state.lat;
        let lng = this.state.lng;
        let bodyData = {
            "qr_code": qrcode,
            "lat": this.state.lat.toString(),
            "lng": this.state.lng.toString()
        }
        headers = {
            'X-Requested-With': 'application/json',
            'Content-Type': 'application/json'
        }
        var api = 'https://cors-anywhere.herokuapp.com/https://orderme-stage.oldevops.nl/api/products/by-qr-code/'
        return fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("response: ",response)
                    if (response.ok) {
                        return response;
                    } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    console.log(error)
                })
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("products response: ",response)
                this.setState({
                    response : response,
                    data : response['categories']
                })
                localStorage.setItem("restaurantId",response['restaurant_id']);
                localStorage.setItem("tableId",response['table_id']);
                localStorage.setItem("isFetched","true");
            })
            .catch(error => console.log(error))
    }

    renderData(category, products){
        for (let [key, value] of Object.entries(products)) {
            if(key == "priority"){
                delete products[key]
            }
        }
        let value;
        let subRows = []
        const itemRows = [
            <li key={category} clickable="true">
                <div className="category">
                    <div className="category-name">
                        <a name={category} className="category-anchor category"></a>
                        <h4 className="ml-3 category-title mt-3 pt-3">{category}</h4>
                        <p className="ml-3 category-description pb-1">Description</p>
                    </div>
                    <div className="product_list">
                        <ul className="list-unstyled">
                            {Object.keys(products).forEach(function(key) {
                                value = products[key];
                                for (let val of value) {
                                    const newTo = {
                                        pathname: '/customerproduct',
                                        state: {
                                            product: val
                                        }
                                    };
                                    const subRecord = [
                                        <Link to={newTo}>
                                            <li key={{key}}>
                                                <div className={"product-card pl-2 pr-2 background-strip"} id={val.id}>
                                                    <div className={"product-card-content col-8"}>
                                                        <h6 className="product-card-title font-weight-bold width-100 mt-3">
                                                            {val.name}
                                                        </h6>
                                                        <p className="card-description width-100 mt-1">{val.description}</p>
                                                        <p className="card-price width-100 mt-1 mb-3">€{val.unit_price}</p>
                                                    </div>
                                                    <div className="product-card-image col-3">
                                                        <img alt="product" className="product-image-small mx-auto d-block"
                                                             src={val.image_thumb_url}/>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    ]
                                    subRows = subRows.concat(subRecord)
                                }

                            })}
                            {subRows}
                        </ul>
                    </div>
                </div>
            </li>
        ]
        return itemRows;
    }

    handleChange(event) {
        let inputValue = event.target.value;
        if(!inputValue){
            this.setState({filteredOrderedProducts: ''})
            return;
        }
        var filteredOrderedProducts = {};
        for (let [category, products] of Object.entries(this.state.data)) {
            if(category == "priority"){
                delete this.state.data[category]
            }
            let productList = [];
            Object.keys(products).forEach(function(productKey) {
                let productsArr = products[productKey];
                for (let product of productsArr) {
                    var similarityName = product.name.toLowerCase().includes(inputValue.toLowerCase());
                    var similarityDescription = false;
                    if(product.description){
                        similarityDescription = product.description.toLowerCase().includes(inputValue.toLowerCase());
                    }

                    if (similarityName || similarityDescription) {
                        productList.push(product);
                    }
                }
            })
            if (productList.length > 0) {
                filteredOrderedProducts["default"] = [];
                products = []
                products.push(productList)
                filteredOrderedProducts[category] = products;
            }
        }
        if (event.target.value) {
            this.setState({filteredOrderedProducts: filteredOrderedProducts})
        }
    }

    onClickSearchIcon(){
        this.state.inputRef.focus();
    }

    render() {
        let allItemRows = [];
        console.log("data: ", this.state.data)
        console.log("filtereddata: ", this.state.filteredOrderedProducts)
        var data = this.state.filteredOrderedProducts != '' ? this.state.filteredOrderedProducts : this.state.data
        for (const [key, value] of Object.entries(data)) {
            if(key == "default"){
                continue
            }
            const perItemRows = this.renderData(key,value);
            allItemRows = allItemRows.concat(perItemRows)
        }

        return (
            <React.Fragment>
                <div id="menu">
                    <div className="search-wrapper">
                        <SearchIcon id="search-icon" height="25px" width="25px" onClick={() => this.onClickSearchIcon()}/>
                        <input type="text"
                               ref={(input) => { this.state.inputRef = input; }}
                               placeholder="Search..."
                               onChange={this.handleChange}
                               id="search-input"
                        />
                    </div>
                    <div className="category-list">
                        <ul className="list-unstyled">
                            {allItemRows}
                        </ul>
                    </div>
                    <div className="pb-3 pl-4 pr-4 pp-buttons fixed-buttons">
                        <button className="order-button" onClick={() => this.openCheckout()}>
                            <div className="w-100">
                                <div className="box top-padding-2 ml-2">
                                    {localStorage.getItem("totalCount")}
                                </div>
                                <div className="top-padding-3 order-price mr-2">€{localStorage.getItem("totalPrice")}</div>
                            </div>
                            <h5 className=" order-me-button w-100" style={{color:"white"}}>View OrderMe</h5>
                        </button>
                    </div>

                </div>
            </React.Fragment>
        );
    }

    openCheckout() {
        this.props.history.push({
            pathname: '/customercheckout',
            search: this.props.location.search,
            state: {
                directPayment: this.state.response['direct_payment'],
                takeaway: this.state.response['takeaway']
            },
        });
    }
}

const ProductMenuPage = compose(
    withRouter,
)(Menu);
export default ProductMenuPage;
