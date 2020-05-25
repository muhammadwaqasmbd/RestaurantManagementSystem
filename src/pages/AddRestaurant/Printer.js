import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, InputGroup, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import $ from 'jquery';

const dropzoneStyle = {
    width  : "100%",
    height : "10px",
};

class Printer extends Component {
    constructor() {
        super();
        this.state = {
            defaultAttrMAC : '',
            defaultAttrPrinterNo: '',
            attributes : [],
            attrCount: 1,
            attrMAC: [],
            attrNo: [],
            attrValuesMAC : [],
            attrValuesNo : [],
            tempCount : 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.addAttributeForm = this.addAttributeForm.bind(this);
        this.handleAttrChange = this.handleAttrChange.bind(this);
        this.removePrinter = this.removePrinter.bind(this);
        this.removeAddPrinter = this.removeAddPrinter.bind(this);
    }

    componentDidMount(){
        if(this.props.id > 0){
            const response = {defaultAttrMAC: 'test 1',defaultAttrPrinterNo:'test', attrArrMAC:'attrMAC1^*&khkj,attrMAC2^*&jkklj',
                            attrArrNo:'attrNo1^*&9789,attrNo2^*&87989'};
            
            this.state.defaultAttrMAC = response.defaultAttrMAC;
            this.state.defaultAttrPrinterNo = response.defaultAttrPrinterNo;

            const attrValArrMAC = response.attrArrMAC.split(',');
            const attrValArrNo = response.attrArrNo.split(',');
            var attrValMap = {};
            attrValArrMAC.forEach((key, i) => attrValMap[key] = attrValArrNo[i]);
            console.log(attrValMap);
            var array = this.state.attributes;
            for (const [key, value] of Object.entries(attrValMap)) {
                const keyArr = key.split("^*&");
                const valArr = value.split("^*&");
                const count = parseInt(keyArr[0].substr(keyArr[0].length - 1));
                array.push(
                <FormGroup className="mb-4" id={"attrrow"+count} row key={"attrrow"+count}>
                    <Col lg="7">
                        <Input id={keyArr[0]} 
                        name={keyArr[0]}
                        value={keyArr[1]}
                        type="text" 
                        className="form-control"
                            placeholder="Printer MAC address" 
                            onChange={this.handleAttrChange}
                            />
                    </Col>
                    <Col lg="4">
                        <Input id={valArr[0]}
                        name={valArr[0]}
                        value={valArr[1]}
                        type="text" 
                        className="form-control"
                            placeholder="Printer No" 
                            onChange={this.handleAttrChange} 
                            />
                    </Col>
                    <Col lg="1">
                    <button type="button" onClick={() => { this.removePrinter(keyArr,valArr,"attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </Col>
                </FormGroup>
                )
                this.setState({
                    attributeForm: array,
                    attrMAC : [...this.state.attrMAC,keyArr[0]],
                    attrNo : [...this.state.attrNo,valArr[0]],
                    attrValuesMAC : [...this.state.attrValuesMAC,keyArr[0]+"^*&"+keyArr[1]],
                    attrValuesNo : [...this.state.attrValuesNo,valArr[0]+"^*&"+valArr[1]],
                    tempCount : count
                });
            }
        }
    }
    removePrinter(MAC, No, rowNo){
        if(MAC.length>0){
            this.setState({attrMAC: this.state.attrMAC.filter(function(mac) { 
                return mac !== MAC[0] 
            })});
            this.setState({attrValuesMAC: this.state.attrValuesMAC.filter(function(mac) { 
                return mac !== MAC[1] 
            })});
        }
        if(No.length>0){
            this.setState({attrNo: this.state.attrNo.filter(function(no) { 
                return no !== No[0] 
            })});
            this.setState({attrValuesNo: this.state.attrValuesNo.filter(function(no) { 
                return no !== No[1] 
            })});
        }
        $("#"+rowNo).remove();
    }

    removeAddPrinter(attrMACKey, attrNoKey, row){
        this.setState({attrMAC: this.state.attrMAC.filter(function(key) { 
            return key !== attrMACKey 
        })});
        this.setState({attrNo: this.state.attrNo.filter(function(key) { 
            return key !== attrNoKey 
        })});
        $("#"+row).remove();
    }

    addAttributeForm() {
        var array = this.state.attributes;
        let count = parseInt(this.state.tempCount + this.state.attrCount);
        array.push(
            <FormGroup className="mb-4" id={"attrrow"+count} row key={"attrrow"+count}>
                <Col lg="7">
                    <Input id="attrMAC" 
                    name={"attrMAC"+count}
                    type="text" 
                    className="form-control"
                        placeholder="Printer MAC address" 
                        onChange={this.handleAttrChange}
                        />
                </Col>
                <Col lg="4">
                    <Input id="attrNo" 
                    name={"attrNo"+count}
                    type="text" 
                    className="form-control"
                        placeholder="Printer No" 
                        onChange={this.handleAttrChange} 
                        />
                </Col>
                <Col lg="1">
                <button type="button" onClick={() => { this.removeAddPrinter("attrMAC"+count,"attrNo"+count,"attrrow"+count)}} className="close" style={{color:"red", fontSize: '40px'}} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </Col>
            </FormGroup>
        );

        this.setState({
            attributeForm: array,
            attrCount : count+1,
            tempCount : 0,
            attrMAC : [...this.state.attrMAC,"attrMAC"+count],
            attrNo : [...this.state.attrNo,"attrNo"+count]
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.defaultAttrMAC);
        console.log(this.state.defaultAttrPrinterNo);
        let attributesMAC = '';
        attributesMAC = this.getAttr(this.state.attrMAC, this.state.attrValuesMAC);
        attributesMAC = attributesMAC.substring(0, attributesMAC.length - 1);
        console.log("attributesMAC: ",attributesMAC);
        let attributesNo = '';
        attributesNo = this.getAttr(this.state.attrNo, this.state.attrValuesNo);
        attributesNo = attributesNo.substring(0, attributesNo.length - 1);
        console.log("attributesNo: ",attributesNo);
        if(this.props.id > 0){
            console.log("Update")
        }else{
            console.log("create")
        }
      }

    getAttr(attrArrParam, attrValuesParam){
        console.log("attrArrParam: ",attrArrParam);
        console.log("attrValuesParam: ", attrValuesParam);
        let attrArr = [];
        attrValuesParam.forEach(item => {
            if(item.includes("^*&")){
                attrArr.push(item);
            }
        });
        let mainArr = [];
        attrArrParam.forEach(attrval => {
            let tempArr = [];
            attrArr.forEach(item => {
                if(item.includes(attrval)){
                    tempArr.push(item);
                }
            });
            mainArr.push(tempArr);
        });
        console.log("mainarr: ",mainArr);
        let attributes = '';
        mainArr.forEach(arr => {
            if(arr.length > 0){
                attributes = attributes + arr.pop() + ",";
            }
        });
        return attributes;
    }
    handleFormChange(event) {
    const value = event.target.value;
    this.setState({
        [event.target.name]: value
    });
    console.log(event.target.name+": "+value);
    }

    handleAttrChange(event) {
        const value = event.target.value;
        const attrMACName = this.state.attrMAC.find(elem => elem == event.target.name);
        const attrNoName = this.state.attrNo.find(elem => elem == event.target.name);
        this.setState({
            attrValuesMAC: [...this.state.attrValuesMAC,attrMACName+"^*&"+value],
            attrValuesNo: [...this.state.attrValuesNo,attrNoName+"^*&"+value]
        });
        console.log(event.target.name+": "+value);
        }

    render() {
        return (
            <React.Fragment>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">PRINTER</CardTitle>
                                        <Form
                                        onSubmit={this.handleSubmit}
                                        id="printerForm"
                                        >
                                            <FormGroup className="mb-4" row>
                                                <Col lg="7">
                                                    <Input id="defaultAttrMAC" 
                                                    name="defaultAttrMAC" 
                                                    type="text" 
                                                    className="form-control"
                                                     placeholder="Printer MAC address" 
                                                     onChange={this.handleFormChange} value={this.state.defaultAttrMAC}
                                                     />
                                                </Col>
                                                <Col lg="4">
                                                    <Input id="defaultAttrPrinterNo" 
                                                    name="defaultAttrPrinterNo" 
                                                    type="text" 
                                                    className="form-control"
                                                     placeholder="Printer No" 
                                                     onChange={this.handleFormChange} value={this.state.defaultAttrPrinterNo}
                                                     />
                                                </Col>
                                            </FormGroup>
                                            { 
                                                this.state.attributes.map(input => {
                                                    return input
                                                })
                                            }
                                            <FormGroup className="mb-4" row>
                                                <Col lg="12">
                                                    <Button type="button" onClick={this.addAttributeForm} color="primary">Add another printer</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="justify-content-end">
                                            <Col lg="8">
                                                <Button type="submit" color="primary" form="printerForm" style={{width:"100%"}}>Save</Button>
                                            </Col>
                                            <Col lg="4">
                                                <Button type="cancel" color="white">Cancel</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default Printer;