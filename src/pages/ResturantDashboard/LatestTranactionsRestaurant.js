import React, { Component } from "react";

import { Card, CardBody, CardTitle, Badge, Button, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import $ from 'jquery';
import {baseUrl} from "../../helpers/baseUrl";

class LatestTranactionsRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                    { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                    { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                    { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                    { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                    { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#",
                    details:{quantities :[1,1,2,3,1], items :["Coca Cola","Strawberrie pie","Apple pie", "French fries", "Coconut juice"]} }
            ],
            expandedRows : [],
            currentPage: 1,
            transactionsPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3
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
        return fetch(baseUrl+'api/menus', {
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
                console.log("response: ",response)
                this.setState({
                    items: response.results
                })
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#'+this.state.currentPage).addClass('active');
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
            <td><Link to="#" className="text-body font-weight-bold"> {transaction.orderId} </Link> </td>
            <td>{transaction.billingName}</td>
            <td>
                {transaction.Date}
            </td>
            <td>
                {transaction.Date}
            </td>
            <td>
                {transaction.total}
            </td>
            <td>
                <Badge className={"font-size-12 badge-soft-" + transaction.badgeClass} color={transaction.badgeClass} pill>{transaction.paymentStatus}</Badge>
            </td>
            <td>
                <i className={"fab " + transaction.methodIcon + " mr-1"}></i> {transaction.paymentMethod}
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
                        !this.state.expandedRows.includes(transaction.id) ? 'Hide Deials' : 'View Details'
                    }
                </Button>
                <Button type="button"
                style={{backgroundColor: 'blue', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={clickCallback} 
                key={"row-data-pos" + transaction.id}
                >
                   Payed or POS
                </Button>
            </td>
        </tr>
        ];
        
        if(!this.state.expandedRows.includes(transaction.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + transaction.id}>
                    <td>
                        {
                            transaction.details.quantities.map((quantity, quantityKey) =>
                                <p key={quantityKey}>
                                    {quantity + " x"}
                                </p>
                            )
                        }
                    </td>
                    <td>
                        {
                            transaction.details.items.map((item, itemKey) =>
                                <p key={itemKey}>
                                    {item}
                                </p>
                            )
                        }
                    </td>
                </tr>
            );
        }
        return itemRows;    
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
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            <div className="row">
                                <div className="col-lg-6">
                                Latest Transaction
                                </div>
                                <div className="col-lg-6 text-right">
                                <Button type="button"
                                style={{backgroundColor: 'green'}}
                                size="sm" 
                                className="btn-rounded waves-effect waves-light" 
                                >
                                Print Excel
                                </Button>
                                </div>
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Table Nr</th>
                                        <th>Time</th>
                                        <th>Date</th>
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
