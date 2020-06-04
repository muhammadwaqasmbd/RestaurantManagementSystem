import React, { Component } from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import $ from 'jquery';
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import Select from "react-select";
import {baseUrl} from "../../helpers/baseUrl";
import { Route, Redirect } from "react-router-dom";

const opts = [{ label: 'Yes', value: "Yes" }, { label: 'No', value: "No" }];

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrcodes: [],
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
            options : [],
            takeway: '',
            directpayment: '',
            redirectToReferrer : false

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
        this.renderOptions = this.renderOptions.bind((this));
        this.handleUnassignment = this.handleUnassignment.bind(this)
    }

    componentDidMount() {
        this.fetchQRCodes();
        this.fetchTables();
    }

    fetchQRCodes(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching qrcodes");
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        headers = {
            'X-Requested-With': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': bearer,
            'RESID': resId
        }
        return fetch(baseUrl+'api/qr-codes/', {
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
                    qrcodes: response
                })
            })
            .catch(error => console.log(error))
    }

    fetchTables(){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        console.log("fetching tables");
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
        return fetch(baseUrl+'api/tables', {
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
                let options = []
                response.results.forEach(table => {
                    options.push(<option value={table.id}>{table.table_number}</option>)
                });
                this.setState({
                    options: options
                })
                console.log("options: ",options)
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
        let totalPage = Math.ceil(this.state.qrcodes.length / this.state.tablesPerPage);
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
        //var newTable = { id: "2", name: "Category Kiebert"};
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
        //var newTable = { id: "2", name: "Category Kiebert"};
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

    handleUnassignment(id){
        let resId = localStorage.getItem('restaurantId')
        let isStuff = localStorage.getItem('isStuff')
        const bearer = 'Bearer ' + localStorage.getItem('access');
        let headers = {}
        let bodyData = {
            "qr_code_id": id
        }
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
        var api = 'api/qr-codes/un-assign-table/'
        return fetch(baseUrl+api, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(bodyData)
        })
            .then(response => {
                    console.log("register response: ",response)
                    if (response.ok) {
                        this.setState({
                            success_dlg: true,
                            dynamic_title: "Unassigned",
                            dynamic_description: "Category Unassigned"
                        })
                        return response;
                    } else {
                        this.setState({
                            error_dlg: true,
                            dynamic_title: "Error",
                            dynamic_description: "Category not unassigned."
                        })
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        console.log(error)
                    }
                },
                error => {
                    this.setState({
                        error_dlg: true,
                        dynamic_title: "Error",
                        dynamic_description: "Category not assigned."
                    })
                    console.log(error)
                })
            .catch(error => console.log(error))
    }

      handleSubmit(event) {
          event.preventDefault();
          let takeaway = this.state.takeaway == "Yes" ? true : false;
          let payment = this.state.directpayment == "Yes" ? true : false;
          console.log("qrcode: "+ this.state.qrcode);
          console.log("tableNo: "+ this.state.tableNo);
          console.log("takeaway: "+ takeaway);
          console.log("payment: "+ payment);
          let resId = localStorage.getItem('restaurantId')
          let isStuff = localStorage.getItem('isStuff')
          const bearer = 'Bearer ' + localStorage.getItem('access');
          let headers = {}
          let bodyData = {
              "table_id":this.state.tableNo,
              "qr_code_id": this.qrcodeid.value,
              "takeaway" : takeaway,
              "direct_payment": payment
          }
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
          var api = 'api/qr-codes/assign-table/'
          return fetch(baseUrl+api, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(bodyData)
          })
              .then(response => {
                      console.log("register response: ",response)
                      if (response.ok) {
                          this.setState({
                              success_dlg: true,
                              dynamic_title: "Assigned",
                              dynamic_description: "Category Assigned"
                          })
                          return response;
                      } else {
                          this.setState({
                              error_dlg: true,
                              dynamic_title: "Error",
                              dynamic_description: "Category not assigned."
                          })
                          var error = new Error('Error ' + response.status + ': ' + response.statusText);
                          error.response = response;
                          console.log(error)
                      }
                  },
                  error => {
                      this.setState({
                          error_dlg: true,
                          dynamic_title: "Error",
                          dynamic_description: "Category not assigned."
                      })
                      console.log(error)
                  })
              .catch(error => console.log(error))
      }

      toggleSelectAll() {
        let selectedItems = [];
        var checkedBoxCheck = !this.state.checkedBoxCheck;
        // this.setState({ checkedBoxCheck: checkedBoxCheck });
        if (checkedBoxCheck) {
          this.state.qrcodes.forEach(x => {
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
            const dataRow = this.state.qrcodes.filter(row => row.id == newEditableRows[0]);
            this.setState({
                editableRows : newEditableRows,
                qrcode : dataRow[0].qr    
            });
        }
      }

    renderTables(qrcode) {
        const editRowCallback = () => this.editTableRow(qrcode.id);
        const pauseCallback = () => this.pauseTable(qrcode.id);
        const itemRows = [
        this.state.editableRows.includes(qrcode.id)  ?
        <tr key={"row--" + qrcode.id}>
                {/*<td>
                    <input
                        type="checkbox"
                        className="checkbox"
                    />
                </td>*/}
                <input type="hidden" name="qrcode_id" ref={node => (this.qrcodeid = node)} value={qrcode.id}/>
                <td>{qrcode.qr_code}</td>
                <td>
                    <select name="tableNo" key = {qrcode.id} value={this.state.tableNo}  onChange={this.handleFormChange} className="form-control">
                        <option></option>
                        {this.state.options}
                    </select>
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
                    key={"cancel-button-" + qrcode.id}
                    >
                        Cancel
                    </Button>
                </td>
        </tr> :
        <tr key={"row-"+qrcode.id}>
            {/*<td>
                <input
                    type="checkbox"
                    checked={this.state.selectedItems.includes(table.id)}
                    className="checkbox"
                    name="selectOptions"
                    onChange={() => this.onItemSelect(table.id)}
                  />
            </td>*/}
            <td>{qrcode.qr_code}</td>
            <td>{qrcode.table_number}</td>
            <td>{qrcode.takeaway ? "Yes" : "No"}</td>
            <td>{qrcode.direct_payment ? "Yes" : "No"}</td>
            <td>
                {/*<Button type="button"
                style={{backgroundColor: 'Maroon', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                onClick={pauseCallback} 
                key={"pause-button-" + table.id}
                >
                    Pause
                </Button>*/}
                {qrcode.table_number == "" || qrcode.table_number == "null" || qrcode.table_number == null?
                <Button type="button" 
                style={{backgroundColor: 'Blue', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                //onClick={editRowCallback} 
                onClick={() => this.onAssignClick(qrcode.id)}
                key={"assign-button-" + qrcode.id}
                >
                    Assign
                </Button>
                :
                <Button type="button" 
                style={{backgroundColor: 'Red', width : '100px', marginLeft : '10px'}}
                size="sm" 
                className="btn-rounded waves-effect waves-light" 
                //onClick={editRowCallback} 
                onClick={() => this.handleUnassignment(qrcode.id)}
                key={"assign-button-" + qrcode.id}
                >
                    Unassign
                </Button>
                }
            </td>
        </tr>
        ];
        
        return itemRows;    
    }

    renderOptions(table){
        const itemRows = [
            <option>{table.table_number}</option>
        ]
        this.setState({
            options: itemRows
        })
    }
    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }
        let allItemRows = [];
        const { qrcodes, currentPage, tablesPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
        const indexOfLastTable = currentPage * tablesPerPage;
        const indexOfFirstTable = indexOfLastTable - tablesPerPage;
        const currentQRCodes = qrcodes.slice(indexOfFirstTable, indexOfLastTable);
        currentQRCodes.forEach(qrcode => {
            const perItemRows = this.renderTables(qrcode);
            console.log(perItemRows);
            allItemRows = allItemRows.concat(perItemRows);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(qrcodes.length / tablesPerPage); i++) {
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
        if(pageNumbers.length > upperPageBound && this.state.qrcodes.length > 5){
            pageIncrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if(lowerPageBound >= 1 && this.state.qrcodes.length > 5){
            pageDecrementBtn = <li className='page-item'><a className='page-link page-link' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className='disabled page-item'><span id="btnPrev" className='page-link page-link'> Prev </span></li>
        }
        else if(this.state.qrcodes.length > 5){
            renderPrevBtn = <li className='page-item'><a id="btnPrev" className='page-link page-link' onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            renderNextBtn = <li className='disabled page-item'><span className='page-link page-link' id="btnNext"> Next </span></li>
        }
        else if(this.state.qrcodes.length > 5){
            renderNextBtn = <li className='page-item'><a id="btnNext" className='page-link page-link' onClick={this.btnNextClick}> Next </a></li>
        }

        return (
            <React.Fragment>
                {this.state.success_dlg ? (
                    <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ success_dlg: false , redirectToReferrer: true})}
                    >
                        {this.state.dynamic_description}
                    </SweetAlert>
                ) : null}

                {this.state.error_dlg ? (
                    <SweetAlert
                        error
                        title={this.state.dynamic_title}
                        onConfirm={() => this.setState({ error_dlg: false, redirectToReferrer: true })}
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
                                QR-CODE ASSIGNMENT
                                </div>
                               {/* <div className="col-lg-6 text-right">
                                <Button type="button"
                                style={{backgroundColor: 'maroon'}}
                                size="sm" 
                                className="btn-rounded waves-effect waves-light" 
                                >
                                Pause Selected
                                </Button>
                                </div>*/}
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                        <Form
                                className="repeater"
                                encType="multipart/form-data"
                                onSubmit={this.handleSubmit}
                                id={"updateTableForm"}
                            ></Form>
                            <table className="table table-centered table-nowrap mb-0" style={{textAlign:'center'}}>
                                <thead className="thead-light">
                                    <tr>
                                        {/*<th style={{width: '10%'}}>
                                        <input
                                            type="checkbox"
                                            className="select-all checkbox"
                                            name="first_name"
                                            id="selectAll1"
                                            checked={this.state.checkedBoxCheck}
                                            onChange={this.toggleSelectAll.bind(this)}
                                        />
                                        </th>*/}
                                        <th style={{width: '20%'}}>QR #</th>
                                        <th style={{width: '20%'}}>Table #</th>
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
