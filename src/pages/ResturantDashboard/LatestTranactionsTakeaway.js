import React, { Component } from "react";

import { Card, CardBody, CardTitle, Badge, Button, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import $ from 'jquery';
import {baseUrl} from "../../helpers/baseUrl";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import SweetAlert from "react-bootstrap-sweetalert";
var Loader = require('react-loader');

class LatestTranactionsRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            expandedRows : [],
            currentPage: 1,
            transactionsPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            success_dlg: false,
            error_dlg: false,
            loaded: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }

    componentDidMount(){
        this.fetchDashboard();
    }

    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#'+this.state.currentPage).addClass('active');
    }


    fetchDashboard(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching menus");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        if(isStuff == "true") {
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        return fetch(baseUrl+'api/restaurants/'+resId+'/dashboard/orders/?takeaway=y', {
            method: 'GET',
            headers: headers
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
                console.log("2nd response: ",response)
                if(response.results.length > 0){
                    this.setState({
                        transactions: response.results
                    })
                }
            })
            .catch(error => console.log(error))
    }

    handleClick(event) {
        let listid = Number(event.target.id);
        this.setState({
            currentPage: listid
        });
        $("ul li.active").removeClass('active');
        $('ul li#'+listid).addClass('active');
        this.setPrevAndNextBtnClass(listid);
    }
    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.state.transactions.length / this.state.transactionsPerPage);
        this.setState({isNextBtnActive: 'disabled'});
        this.setState({isPrevBtnActive: 'disabled'});
        if(totalPage === listid && totalPage > 1){
            this.setState({isPrevBtnActive: ''});
        }
        else if(listid === 1 && totalPage > 1){
            this.setState({isNextBtnActive: ''});
        }
        else if(totalPage > 1){
            this.setState({isNextBtnActive: ''});
            this.setState({isPrevBtnActive: ''});
        }
    }
    btnIncrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnDecrementClick() {
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage: listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnPrevClick() {
        if((this.state.currentPage -1)%this.state.pageBound === 0 ){
            this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if((this.state.currentPage +1) > this.state.upperPageBound ){
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);
        this.setState({expandedRows : newExpandedRows});
    }

    renderTransactions(transaction) {
        const clickCallback = () => this.handleRowClick(transaction.id);
        const itemRows = [
            <tr key={transaction.id}>
                <td><Link to="#" className="text-body font-weight-bold"> {transaction.id} </Link> </td>
                <td>{transaction.table_number}</td>
                <td>
                    {transaction.placed_at}
                </td>
                <td>
                    {transaction.placed_at}
                </td>
                <td>
                    {transaction.tip}
                </td>
                <td>
                    {transaction.total}
                </td>
                <td>
                    <Badge className={"font-size-12 badge-soft-"+transaction.paid? "success" : "danger"}  pill>{transaction.paid ? "Paid" : "Unpaid"}</Badge>
                </td>
                <td>
                    <i className={"fab "+transaction.payment_method == "Visa" ? " fa-cc-visa " : transaction.payment_method == "Paypal" ? " fa-cc-paypal "
                        : transaction.payment_method == "Mastercard" ? " fa-cc-mastercard " : " "+"mr-1"}></i> {transaction.payment_method}
                </td>
                <td>
                    <Button type="button"
                            style={{backgroundColor: !this.state.expandedRows.includes(transaction.id) ? 'red' : 'blue'}}
                            size="sm"
                            className="btn-rounded waves-effect waves-light"
                            onClick={clickCallback}
                            key={"row-data-" + transaction.id}
                    >
                        {
                            !this.state.expandedRows.includes(transaction.id) ? 'Hide Details' : 'View Details'
                        }
                    </Button>
                    {transaction.paid ?
                        "":
                        <Button type="button"
                                style={{backgroundColor: 'blue', marginLeft : '10px'}}
                                size="sm"
                                className="btn-rounded waves-effect waves-light"
                                onClick={() => {this.payedOrPos(transaction.id,transaction.payment_method)}}
                                key={"row-data-pos" + transaction.id}
                        >
                            Payed or POS
                        </Button>}
                </td>
            </tr>
        ];

        if(!this.state.expandedRows.includes(transaction.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + transaction.id}>
                    {
                        transaction.products.map((item) =>
                            <div>
                                <td>

                                    <p>
                                        {item.quantity + " x"}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {item.name}
                                    </p>
                                </td>
                            </div>
                        )
                    }
                </tr>
            );
        }
        return itemRows;
    }

    payedOrPos(orderId, paymentMethod) {
        this.setState({
            loaded: false
        })
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "order_id":parseInt(orderId),
            "payment_type":"cash",
        }
        if(isStuff == "true") {
            headers = {
                'Content-Type': 'application/json',
                'X-Requested-With': 'application/json',
                'Authorization': bearer,
                'RESID': resId
            }
        }else{
            headers = {
                'X-Requested-With': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': bearer
            }
        }
        var api = 'api/orders/complete-order/';
        return fetch(baseUrl+api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("category response: ",response)
                    if (response.ok) {
                        this.setState({
                            loaded: true,
                            success_dlg: true,
                            dynamic_title: "Payed",
                            dynamic_description: "Payed."
                        })
                        return response;
                    } else {
                        this.setState({
                            loaded: true,
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Error in payment."
                        })
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    this.setState({
                        loaded: true,
                        error_dlg: true,
                        dynamic_title: "Error",
                        dynamic_description: "Error in payment."
                    })
                    console.log(error)
                })
            .catch(error => console.log(error))
    }

    render() {
        let allItemRows = [];
        const { transactions, currentPage, transactionsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastTransaction = currentPage * transactionsPerPage;
        const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
        const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
        currentTransactions.forEach(transaction => {
            const perItemRows = this.renderTransactions(transaction);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(transactions.length / transactionsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if(number === 1 && currentPage === 1){
                return(
                    <li key={number} className='active page-item' id={number}><a className="page-link page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
            else if((number < upperPageBound + 1) && number > lowerPageBound){
                return(
                    <li key={number} id={number} className='page-item'><a className="page-link page-link" id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
        });
        let pageIncrementBtn = null;
        if(pageNumbers.length > upperPageBound){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else{
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else{
            renderNextBtn = <li className='page-item'><a id="btnNext" className='page-link page-link' onClick={this.btnNextClick}> Next </a></li>
        }
        return (
            <React.Fragment>
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() =>  window.location.reload()}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => window.location.reload()}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null
                }
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    Latest Transaction
                                </div>
                                <div className="col-lg-6 text-right">
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="btn btn-success btn-rounded waves-effect waves-light btn btn-success"
                                        table="transaction-takeaway"
                                        filename="Takeaway Transactions"
                                        sheet="Takeaway Transactions"
                                        buttonText="Print Excel"/>
                                </div>
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                            <Loader loaded={this.state.loaded}>
                            <table className="table table-centered table-nowrap mb-0" id="transaction-takeaway">
                                <thead className="thead-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Table Nr</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Tip</th>
                                    <th>Total</th>
                                    <th>Payment Status</th>
                                    <th>Payment Method</th>
                                    <th>View Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {allItemRows}
                                </tbody>
                            </table>
                            </Loader>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="pagination pagination-rounded justify-content-center mt-4" aria-label="pagination">
                                    <ul id="page-numbers" className="pagination">
                                        {renderPrevBtn}
                                        {pageDecrementBtn}
                                        {renderPageNumbers}
                                        {pageIncrementBtn}
                                        {renderNextBtn}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>

                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default LatestTranactionsRestaurant;
