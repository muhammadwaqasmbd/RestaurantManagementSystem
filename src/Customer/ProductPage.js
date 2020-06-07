import React from "react";
import {ReactComponent as MinusLogo} from "./img/minus.svg";
import {ReactComponent as PlusLogo} from "./img/add.svg";

class ProductPageBase extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.location || !this.props.location.state || !this.props.location.state.product) {
            this.state = {noProduct: true};
            return;
        }

        this.state = {
            noProduct: false,
            product: this.props.location.state.product,
            count: 1,
            comment: '',
            extraAttributes: [],
            totalPrice : this.props.location.state.product.unit_price,
            cart : [],
            showAttrs : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAttrs = this.handleAttrs.bind(this)
    }

    componentDidMount() {
        console.log("didm start");

        const item = document.getElementById("product-image");
        if (item) {
            item.scrollIntoView();
        }
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        if (name === "attributes") {
            value = target.type === 'checkbox' ? target.checked : target.value;
        }
        if (name === "extraAttributes") {
            let extraAttributes = this.state.extraAttributes;
            extraAttributes[target.id] = value;
            value = extraAttributes;
        }

        this.setState({
            [name]: value
        });
    }

    updateProduct(product) {
        this.setState({
            product: product
        });
    }

    updateCount(count) {
        this.setState({
            count: count,
            totalPrice: parseFloat(this.state.product.unit_price)*count
        });
    }

    addProduct() {
        console.log(this.state);
        let cart = [];
        if(localStorage.getItem("cart")!=null && localStorage.getItem("cart")!="null" && localStorage.getItem("cart")!=""){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        var order = {};
        var id =this.state.product.id;
        var quantity = this.state.count;
        var name = this.state.product.name;
        var amount = this.state.totalPrice
        var comment = this.state.comment;
        order["id"] = id;
        order["quantity"] = quantity;
        order["name"] = name;
        order["amount"] = amount;
        order["comment"] = comment;
        order["unit_price"] = this.state.product.unit_price;
        order["vat_percent"] = this.state.product.vat_percent;
        cart.push(order);
        if(localStorage.getItem("totalCount")!=null && localStorage.getItem("totalCount") != "null" && localStorage.getItem("totalCount")!= "") {
            localStorage.setItem("totalCount", this.state.count + parseFloat(localStorage.getItem("totalCount")));
        }else{
            localStorage.setItem("totalCount", this.state.count);
        }
        if(localStorage.getItem("totalPrice")!=null && localStorage.getItem("totalPrice") != "null" && localStorage.getItem("totalPrice")!= "") {
            localStorage.setItem("totalPrice", this.state.totalPrice + parseFloat(localStorage.getItem("totalPrice")));
        }else{
            localStorage.setItem("totalPrice", this.state.totalPrice);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
        this.props.history.push({
            pathname: '/customer/'+localStorage.getItem('qrcode')+'',
            search: this.props.location.search
        });

    }

    onClickCancel() {
        console.log(this.state.previousPage);
        this.props.history.push({
            pathname: '/customer/'+localStorage.getItem('qrcode')+'',
            search: this.props.location.search,
            state: {'restoreProduct': this.props.productId},
        });
    }

    onClick(value) {
        var newValue = this.state.count + value;
        if (newValue < 0) {
            newValue = 0;
        }
        this.setState({count: newValue}, this.updateCount(newValue));
    }

    handleAttrs({target}){
        if (target.checked){
            this.setState({
                showAttrs : true
            })
        }else{
            this.setState({
                showAttrs : false
            })
        }
    }

    render() {
        if (this.state.noProduct) {
            return 'There is no product to display';
        }
        return (
            <div id="product-view">
                <div className="product-detail-wrapper">
                    <img className="product-image" id="product-image" src={this.state.product.image_url}/>
                    <div className="product-detail">
                        <h5 className="card-name">{this.state.product.name}</h5>
                        <span
                            className="card-description-product-page text-grey w-100">{this.state.product.description}</span>
                        <textarea placeholder="Add your comment." rows="4" className="w-100 border-dark pl-2 mt-2" name="comment"
                                  value={this.state.product.comment}
                                  onChange={this.handleChange}/>
                        <input type="checkbox" name={"attributes"} onClick={this.handleAttrs}/>
                        {this.state.showAttrs ? this.state.product.attributes : ""}
                        <div className="row counter mt-2">
                            <span className="" onClick={() => this.onClick(-1)}><MinusLogo alt="minus" height="25px" width="25px" fill={this.context.primaryColor}/></span>
                            <h4 className="font-weight-bold counter">{this.state.count}</h4>
                            <span className="" onClick={() => this.onClick(1)}><PlusLogo alt="add" height="25px" width="25px"  fill={this.context.primaryColor}/></span>
                        </div>
                        <br/>
                    </div>
                    <div className="height-100"></div>
                    <div className="pb-3 pl-4 pr-4 pp-buttons fixed-buttons">
                        <button className="col-7 order-button" onClick={() => this.addProduct()}>
                            OrderMe for €{this.state.totalPrice}
                        </button>
                        <button className="col-4 cancel-button offset-1 mt-2" onClick={() => this.onClickCancel()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPageBase;
