import React from "react";
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import {ReactComponent as CloseLogo} from "./img/x.svg";
import {ReactComponent as MinusLogo} from "./img/minus.svg";
import {ReactComponent as PlusLogo} from "./img/add.svg";
import {Input} from "reactstrap";
import InputRange from 'react-input-range';

class CheckoutBase extends React.Component {
    constructor(props) {
        super(props);
        let noProduct = false;
        if (!this.props.location.state || !localStorage.getItem("cart")) {
            noProduct = true;
        }
        let directPayment = false;
        let takeaway = false;
        if(this.props.location.state){
            directPayment = this.props.location.state.directPayment;
            takeaway = this.props.location.state.takeaway;
        }
        let products = [];
        if(localStorage.getItem("cart") != null && localStorage.getItem("cart") != "null" && localStorage.getItem("cart") != ""){
            products = JSON.parse(localStorage.getItem("cart"));
        }

        this.state = {
            noProduct: noProduct,
            shoppingList: [],
            products: products,
            restaurantHasPos: false,
            totalPrice : 0.0,
            directPayment : directPayment,
            takeaway:takeaway,
            color: this.props.location.state.color,
            value : 10
        };
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
        console.log(event.target.name+": "+value);
    }

    componentDidMount() {
        let totalAmount = 0.0;
        for (let product of this.state.products) {
            totalAmount = totalAmount+product.amount
            product['single_price'] = product.amount/product.quantity
        }
        this.setState({
            totalPrice: totalAmount
        })
    }

    onClick(value, id) {
        var products = this.state.products;
        var objIndex = products.findIndex((obj => obj.id == id));
        var price = products[objIndex].single_price;
        console.log("Before update: ", products[objIndex])
        if(products[objIndex].quantity + value < 0){
            console.log("Less than 0 not allowed")
        }else{
            products[objIndex].quantity = products[objIndex].quantity + value
            products[objIndex].amount = value > 0 ? products[objIndex].amount + price : products[objIndex].amount - price
            console.log("After update: ", products[objIndex])
            this.setState({
                products: products,
                totalPrice: value > 0 ? this.state.totalPrice + price : this.state.totalPrice - price
            })
        }
    }

    renderItems(product){
        console.log("product: ",product);
        const item = [
            <div className="checkout-item">
                <div className="checkout-item-left-small">
                    <div className="row counter">
                        <input type="hidden" name={"id"} id={"id"} value={product.id}/>
                        <span className="" onClick={() => this.onClick(-1,product.id)}><MinusLogo height="15px" width="15px" fill={this.context.primaryColor}/></span>
                        <span className="checkout-counter">{product.quantity}</span>
                        <span className="" onClick={() => this.onClick(1,product.id)}><PlusLogo height="15px" width="15px" fill={this.context.primaryColor}/></span>
                    </div>
                </div>
                <div className="checkout-items-middle-left" /*onClick={() => this.onClickProduct()}*/>
                    {product.name}
                </div>
                <div className="checkout-item-right">
                    <p className="checkout-item-total-price">€{product.amount}</p>
                </div>
            </div>
        ]
        return item
    }

    checkOutOrder(){
        var products = [];
        console.log(localStorage.getItem("cart"))
        for(var order of JSON.parse(localStorage.getItem("cart"))){
            var product = {}
            product['product_id'] = order.id;
            product['quantity'] = order.quantity;
            product['unit_price'] = order.unit_price;
            product['vat_percent'] = order.vat_percent;
            product['comment'] = order.comment;
            products.push(product)
        }
        let bodyData = {
            "restaurant_id":parseInt(localStorage.getItem("restaurantId")),
            "table_id":parseInt(localStorage.getItem("tableId")),
            "lat":localStorage.getItem("lat"),
            "lng":localStorage.getItem("lng"),
            "take_away": this.state.takeaway,
            "order_price": this.state.totalPrice,
            "payment_type": "cash",
            "direct_payment": this.state.directPayment,
            "tip": this.state.value,
            "products" : products
        }
        console.log("order: ",JSON.stringify(bodyData))
        let headers = {
            'X-Requested-With': 'application/json',
            'Content-Type': 'application/json',
        }
        var api = 'https://orderme-stage.oldevops.nl/api/orders/';
        return fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        console.log("1st response: ", response)
                        localStorage.removeItem("cart")
                        localStorage.removeItem("totalPrice")
                        localStorage.removeItem("totalCount")
                        localStorage.removeItem("isFetched")
                        return response;
                    } else {
                        this.props.history.push({
                            pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                            search: this.props.location.search
                        });
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }

                },
                error => {
                    console.log(error)
                    this.props.history.push({
                        pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                        search: this.props.location.search
                    });
                })
            .then(response => response.json())
            .then(response => {
                // If response was successful, set the token in local storage
                console.log("2nd response: ",response)
                if(response.payment_created == false) {
                    localStorage.setItem("orderId", response.new_order_id)
                    this.props.history.push({
                        pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                        search: this.props.location.search
                    });
                }else{
                    window.open(response.checkout_url, '_blank')
                }

            })
            .catch(error => console.log(error))
    }

    goToLandingPage() {
        this.props.history.push({
            pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
            search: this.props.location.search
        });
    }

    completeOrder(){
        var products = [];
        console.log(localStorage.getItem("cart"))
        for(var order of JSON.parse(localStorage.getItem("cart"))){
            var product = {}
            product['product_id'] = order.id;
            product['quantity'] = order.quantity;
            product['unit_price'] = order.unit_price;
            product['vat_percent'] = order.vat_percent;
            products.push(product)
        }
        let bodyData = {
            "restaurant_id":parseInt(localStorage.getItem("restaurantId")),
            "table_id":parseInt(localStorage.getItem("tableId")),
            "order_price": this.state.totalPrice,
            "order_id": parseInt(localStorage.getItem("orderId")),
            "products" : products
        }
        console.log("order: ",JSON.stringify(bodyData))
        let headers = {
            'X-Requested-With': 'application/json',
            'Content-Type': 'application/json',
        }
        var api = 'https://orderme-stage.oldevops.nl/api/orders/add-products/';
        return fetch(api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log(" response: ",response)
                    if (response.ok) {
                        console.log("1st response: ", response)
                        localStorage.removeItem("cart")
                        localStorage.removeItem("totalPrice")
                        localStorage.removeItem("totalCount")
                        localStorage.removeItem("isFetched")
                        localStorage.removeItem("orderId")
                        this.props.history.push({
                            pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                            search: this.props.location.search
                        });
                        return response;
                    } else {
                        this.props.history.push({
                            pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                            search: this.props.location.search
                        });
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }

                },
                error => {
                    console.log(error)
                    this.props.history.push({
                        pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                        search: this.props.location.search
                    });
                })
            .catch(error => console.log(error))
    }


    render() {
        console.log("products: ",this.props.products);
        let checkoutItems = []
        for (let product of this.state.products) {
            const row = this.renderItems(product);
            checkoutItems = checkoutItems.concat(row)
        }
        return (
            <div className="checkout-wrapper">
                <div className="checkout-products">
                    <div className="checkout-your-order">
                        <h5 className="font-weight-bold my-basket" style={{color:this.state.color}}>My Basket</h5>
                        <span id="close-x" onClick={() => this.props.history.push({
                            pathname: '/qr-code/'+localStorage.getItem('qrcode')+'',
                            search: this.props.location.search
                        })}>
                            <CloseLogo alt="close" height="15px" width="15px" fill={this.context.primaryColor}/>
                        </span>
                    </div>
                    {this.state.noProduct ?
                        <div className="checkout-items">
                            <h5>There are no Products in your basket</h5>
                        </div>
                        :
                    <div className="checkout-items">
                        {checkoutItems}
                    </div>}

                </div>
                <div className="checkout-buttons mt-4">
                    <div className="checkout-items">
                        <InputRange
                            name={"value"}
                            maxValue={20}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                    </div>
                    <div className="mt-4">
                        <div className="checkout-item-left font-weight-bold font-size-128">Total</div>
                        <div
                            className="checkout-item-right font-weight-bold">€{this.state.totalPrice}</div>
                    </div>
                    {!localStorage.getItem("orderId") || localStorage.getItem("orderId") == "null" && this.state.directPayment ?
                        <div>
                            <button className="col-3 order-button"style={{marginLeft:"5px",marginRight:"5px",backgroundColor:this.state.color}} id="ordermenow-button"
                                    onClick={() => this.checkOutOrder()}>Order and pay now
                            </button>
                            <button className="col-3 order-button" style={{marginLeft:"5px",marginRight:"5px",backgroundColor:this.state.color}} id="ordermenow-button"
                                    onClick={() => this.checkOutOrder()}>Order and pay later
                            </button>
                            <button className="col-3 offset-1 cancel-button"
                                    onClick={() => this.goToLandingPage()}>Cancel
                            </button>
                        </div>
                        :
                        <div>
                        <button className="col-3 order-button" style={{marginLeft:"5px",marginRight:"5px",backgroundColor:this.state.color}} id="ordermenow-button"
                                onClick={() => localStorage.getItem("orderId") && localStorage.getItem("orderId") != "null" && localStorage.getItem("orderId")!=null
                                && localStorage.getItem("orderId")!= "" ? this.completeOrder() : this.checkOutOrder() }>Order and pay later
                        </button>
                        <button className="col-3 offset-1 cancel-button"
                            onClick={() => this.goToLandingPage()}>Cancel
                        </button>
                        </div>
                    }


                </div>
            </div>
        );
    }

}


const CheckoutPage = compose(
    withRouter,
)(CheckoutBase);

export default CheckoutPage;
