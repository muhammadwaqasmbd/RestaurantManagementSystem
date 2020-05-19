import React, { Component } from "react";

import { Card, CardBody, CardTitle, Badge, Button, Collapse } from "reactstrap";
import $ from 'jquery';
import SweetAlert from "react-bootstrap-sweetalert";

class RestaurantsOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [
                { id: "1", name: "Restaurant Dirk", totalRevenue: "1,300.000", last30DaysRevenue: "85.095",
                last7DaysRevenue: "234.400", totalOrder: "340.002", last30DaysOrders: "245.020", last7DaysOrders: "213"},
                { id: "1", name: "Restaurant Dirk", totalRevenue: "1,300.000", last30DaysRevenue: "85.095",
                last7DaysRevenue: "234.400", totalOrder: "340.002", last30DaysOrders: "245.020", last7DaysOrders: "213"}
            ],
            expandedRows : [],
            currentPage: 1,
            restaurantsPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            confirm_both: false,
            success_dlg: false,
            error_dlg: false

        };
        this.handleClick = this.handleClick.bind(this);
            this.btnDecrementClick = this.btnDecrementClick.bind(this);
            this.btnIncrementClick = this.btnIncrementClick.bind(this);
            this.btnNextClick = this.btnNextClick.bind(this);
            this.btnPrevClick = this.btnPrevClick.bind(this);
            this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
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
        let totalPage = Math.ceil(this.state.restaurants.length / this.state.restaurantsPerPage);
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

    handleDeleteRestaurant(rowId){
        this.setState({ confirm_both: true })
    }
    
    renderRestaurants(restaurant) {
        const clickCallback = () => this.handleRowClick(restaurant.id);
        const deleteCallBack = () => this.handleDeleteRestaurant(restaurant.id);
        const itemRows = [
        <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.totalRevenue}</td>
            <td>{restaurant.last30DaysRevenue}</td>
            <td>{restaurant.last7DaysRevenue}</td>
            <td>{restaurant.totalOrder}</td>
            <td>{restaurant.last30DaysOrders}</td>
            <td>{restaurant.last7DaysOrders}</td>
        </tr>
        ];
        
        if(this.state.expandedRows.includes(restaurant.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + restaurant.id}>
                    <div></div>
                </tr>
            );
        }
        return itemRows;    
    }

    render() {
        let allItemRows = [];
        const { restaurants, currentPage, restaurantsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastRestaurant = currentPage * restaurantsPerPage;
        const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
        const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
        currentRestaurants.forEach(restaurant => {
            const perItemRows = this.renderRestaurants(restaurant);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(restaurants.length / restaurantsPerPage); i++) {
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
        if(pageNumbers.length > upperPageBound && this.state.restaurants.length > 5){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1 && this.state.restaurants.length > 5){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else if(this.state.restaurants.length > 5){
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else if(this.state.restaurants.length > 5){
            renderNextBtn = <li className='page-item'><a id="btnNext" className='page-link page-link' onClick={this.btnNextClick}> Next </a></li>
        }
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            RESTAURANTS
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Restaurant</th>
                                        <th>Total Revenue</th>
                                        <th>Revenue Last 30 Days</th>
                                        <th>Revenue Last 7 Days</th>
                                        <th>Total Orders</th>
                                        <th>Orders Last 30 Days</th>
                                        <th>Orders Last 7 Days</th>
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

export default RestaurantsOverview;
