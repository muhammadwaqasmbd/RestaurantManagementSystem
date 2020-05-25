import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, CardTitle, CardBody , Card} from "reactstrap";

export default class Droppable extends React.Component{

    drop = (e) =>{
        let oldMenuProductIds = [];
        var menuProducts = document.getElementById('menuProducts');
        let oldMenuValuesArray = [...menuProducts.children]
        oldMenuValuesArray.forEach(function(div){
            if(div.id!=""){
                oldMenuProductIds.push(div.id);
            }
        });
        let oldOtherProductIds = [];
        var otherProducts = document.getElementById('otherProducts');
        let oldOtherValuesArray = [...otherProducts.children]
        oldOtherValuesArray.forEach(function(div){
            if(div.id!=""){
                oldOtherProductIds.push(div.id);
            }
        });
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));
        let array = [ ...e.target.children ];
        let newIds = [];
        array.forEach(function(div){
            if(div.id!=""){
                newIds.push(div.id);
            }
        });
        let finalArray = [];
        if(this.props.id == "menuProducts"){
            console.log("Old values menu products: ",oldMenuProductIds);
            console.log("new values menu products",newIds);
            finalArray = oldMenuProductIds.filter(x => !newIds.includes(x)).concat(newIds.filter(x => !oldMenuProductIds.includes(x)));
            this.props.handleProductAdd(finalArray[0]);
        }else  if(this.props.id == "otherProducts"){
            console.log("Old values other products: ",oldOtherProductIds);
            console.log("new values menu products",newIds);
            finalArray = oldOtherProductIds.filter(x => !newIds.includes(x)).concat(newIds.filter(x => !oldOtherProductIds.includes(x)));
            this.props.handleProductRemove(finalArray[0]);
        }
        
        

        
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <Card id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </Card>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}