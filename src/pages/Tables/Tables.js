import React, { Component } from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import $ from 'jquery';
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import Select from "react-select";

const opts = [{ label: 'Yes', value: "Yes" }, { label: 'No', value: "No" }];

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: [
                { id: "1", qr: "3245892", table: "1", takeaway: "Yes", directpayment: "No"},
                { id: "2", qr: "9842325", table: "", takeaway: "No", directpayment: "Yes"},
                { id: "3", qr: "3245892", table: "", takeaway: "Yes", directpayment: "No"},
                { id: "4", qr: "9842325", table: "5", takeaway: "No", directpayment: "Yes"},
                { id: "5", qr: "3245892", table: "", takeaway: "Yes", directpayment: "No"},
                { id: "6", qr: "9842325", table: "7", takeaway: "No", directpayment: "Yes"}
            ],
            editableRows : [],
            currentPage: 1,
            tablesPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
            confirm_both: false,
            success_dlg: false,
            error_dlg: false,
            newItem: false,
            newRows : [],
            name : '',
            checkedBoxCheck: false,
            selectedItems: [],
            tableNo : '',
            qrcode: '',
            takeaway: '',
            directpayment: ''

        };
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
        this.editTable = this.editTable.bind(this);
        this.editTableRow = this.editTableRow.bind(this);
        this.pauseTable = this.pauseTable.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onAssignClick = this.onAssignClick.bind(this);
        this.handleTableNoFormChange = this.handleTableNoFormChange.bind(this);
    }

    componentDidUpdate() {

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
        let totalPage = Math.ceil(this.state.tables.length / this.state.tablesPerPage);
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


    editTable(id){
        console.log(id);
        //var newTable = { id: "2", name: "Table Kiebert"};    
        //this.setState({ tables: this.state.tables.concat(newTable) }); 
    }

    editTableRow(rowId){
        const currentEditableRows = this.state.editableRows;
        const isRowCurrentlyExpanded = currentEditableRows.includes(rowId);
        const newEditableRows = isRowCurrentlyExpanded ? 
        currentEditableRows.filter(id => id !== rowId) : 
        currentEditableRows.concat(rowId);
        this.setState({
            tableNo : '',
            takeaway : '',
            directpayment : '',
            editableRows : newEditableRows
        });
    }

    pauseTable(id){
        console.log(id);
        //var newTable = { id: "2", name: "Table Kiebert"};    
        //this.setState({ tables: this.state.tables.concat(newTable) }); 
    }

    addNewRow(){
        const item = {
            name: ""
          };
          this.setState({
            newRows: [...this.state.newRows, item]
          });                          
    }

    removeRow = (e, idx) => {
        $("#addr" + idx).hide();
      };

      handleFormChange(event) {
        /*const val = event.target.value;
        this.setState(oldState => {
            const newStatus = oldState.tableNo.slice();
            newStatus[index] = val;
            return {
                [event.target.name]: newStatus
            };
        });*/
        const value = event.target.value;
        this.setState({
          [event.target.name]: value
        });
      }

      handleTableNoFormChange(event){
        this.setState({
            editableRows: {
              ...this.state.editableRows,
              tableNo: event.target.value
            }
          });

      }
    
      handleSubmit(event) {
        alert("qrcode: "+ this.state.qrcode);
        alert("tableNo: "+ this.state.tableNo);
        alert("takeaway: "+ this.state.takeaway);
        alert("directpayment: "+ this.state.directpayment);
        event.preventDefault();
        //var newTable = { id: "2", name: "Table Kiebert"};    
        //this.setState({ tables: this.state.tables.concat(newTable) 
      }

      toggleSelectAll() {
        let selectedItems = [];
        var checkedBoxCheck = !this.state.checkedBoxCheck;
        // this.setState({ checkedBoxCheck: checkedBoxCheck });
        if (checkedBoxCheck) {
          this.state.tables.forEach(x => {
            // selectedItems[x.id] = x.id
            selectedItems.push(x.id);
          });
        } else {
          selectedItems = [];
        }
        this.setState(prevState => ({
          selectedItems,
          checkedBoxCheck
        }));
    }

    async onItemSelect(row) {
        
        const selectedItems = this.state.selectedItems.slice(0);
        console.log("selectedItems: ",selectedItems);
        if (selectedItems.includes(row)) {
          selectedItems.splice(selectedItems.indexOf(row), 1);
        } else {
          selectedItems.push(row);
        }
        await this.setState({
          selectedItems
        });
        console.log("Hello", this.state.selectedItems);

      }

      async onAssignClick(row) {
        const currentEditableRows = this.state.editableRows;
        if(currentEditableRows.length <= 0){
            const isRowCurrentlyExpanded = currentEditableRows.includes(row);
            const newEditableRows = isRowCurrentlyExpanded ? 
            currentEditableRows.filter(id => id !== row) : 
            currentEditableRows.concat(row);
            const dataRow = this.state.tables.filter(row => row.id == newEditableRows[0]);
            this.setState({
                editableRows : newEditableRows,
                qrcode : dataRow[0].qr    
            });
        }
      }

    renderTables(table) {
        const editRowCallback = () => this.editTableRow(table.id);
        const pauseCallback = () => this.pauseTable(table.id);
        const itemRows = [
        this.state.editableRows.includes(table.id)  ? 
        <tr key={"row--" + table.id}>
                <td>
                    <input
                        type="checkbox"
                        className="checkbox"
                    />
                </td>
                <td>{table.qr}</td>
                <td>
                    <Input
                        key = {table.id}
                        type="text"
                        id="tableNo"
                        name="tableNo" 
                        className="form-control"
                        value={this.state.tableNo}  
                        onChange={this.handleFormChange}
                    />
                </td>
                <td>
                    <select name="takeaway" onChange={this.handleFormChange} value={this.state.takeaway} className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </td>
                <td>
                    <select name="directpayment" onChange={this.handleFormChange} value={this.state.directpayment} className="form-control">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </td>
                <td>
                    <Button
                        style={{backgroundColor: 'Green', width : '100px'}}
                        size="sm" 
                        className="btn-rounded waves-effect waves-light"
                        form={"updateTableForm"}
                    >
                    Save
                    </Button>
                    <Button type="button" 
                    style={{backgroundColor:'Red', width : '100px', marginLeft : '10px'}}
                    size="sm" 
                    className="btn-rounded waves-effect waves-light" 
                    onClick={editRowCallback} 
                    key={"cancel-button-" + table.id}
                    >
                        Cancel
                    </Button>
                </td>
        </tr> :
        <tr key={"row-"+table.id}>
            <td>
                <input
                    type="checkbox"
                    checked={this.state.selectedItems.includes(table.id)}
                    className="checkbox"
                    name="selectOptions"
                    onChange={() => this.onItemSelect(table.id)}
                  />
            </td>
            <td>{table.qr}</td>
            <td>{table.table}</td>
            <td>{table.takeaway == "Yes" ? "Yes" : "No"}</td>
            <td>{table.directpayment == "Yes" ? "Yes" : "No"}</td>
            <td>
                <Button type="button" 
                style={{backgroundColor: 'Maroon', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={pauseCallback} 
                key={"pause-button-" + table.id}
                >
                    Pause
                </Button>
                {table.table == ""?
                <Button type="button" 
                style={{backgroundColor: 'Blue', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                //onClick={editRowCallback} 
                onClick={() => this.onAssignClick(table.id)}
                key={"assign-button-" + table.id}
                >
                    Assign
                </Button>
                :
                <Button type="button" 
                style={{backgroundColor: 'Red', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                //onClick={editRowCallback} 
                onClick={() => this.onAssignClick(table.id)}
                key={"assign-button-" + table.id}
                >
                    Unassign
                </Button>
                }
            </td>
        </tr>
        ];
        
        return itemRows;    
    }

    render() {
        let allItemRows = [];
        const { tables, currentPage, tablesPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastTable = currentPage * tablesPerPage;
        const indexOfFirstTable = indexOfLastTable - tablesPerPage;
        const currentTables = tables.slice(indexOfFirstTable, indexOfLastTable);
        currentTables.forEach(table => {
            const perItemRows = this.renderTables(table);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(tables.length / tablesPerPage); i++) {
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
        if(pageNumbers.length > upperPageBound && this.state.tables.length > 5){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1 && this.state.tables.length > 5){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else if(this.state.tables.length > 5){
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else if(this.state.tables.length > 5){
            renderNextBtn = <li className='page-item'><a id="btnNext" className='page-link page-link' onClick={this.btnNextClick}> Next </a></li>
        }

        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                        <div className="row">
                                <div className="col-lg-6">
                                QR-CODE ASSIGNMENT
                                </div>
                                <div className="col-lg-6 text-right">
                                <Button type="button"
                                style={{backgroundColor: 'maroon'}}
                                size="sm" 
                                className="btn-rounded waves-effect waves-light" 
                                >
                                Pause Selected
                                </Button>
                                </div>
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                        <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id={"updateTableForm"}
                            ></Form>
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th style={{width: '10%'}}>
                                        <input
                                            type="checkbox"
                                            className="select-all checkbox"
                                            name="first_name"
                                            id="selectAll1"
                                            checked={this.state.checkedBoxCheck}
                                            onChange={this.toggleSelectAll.bind(this)}
                                        />
                                        </th>
                                        <th style={{width: '15%'}}>QR #</th>
                                        <th style={{width: '15%'}}>Table #</th>
                                        <th style={{width: '15%'}}>Takeaway</th>
                                        <th style={{width: '15%'}}>Direct Payment</th>
                                        <th style={{width: '30%', textAlign: "center"}}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="tablesBody">
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

export default Tables;
