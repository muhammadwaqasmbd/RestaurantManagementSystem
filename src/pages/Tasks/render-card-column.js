import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

class RenderCardColumn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <Link to="#" className="btn btn-primary btn-block mt-1 waves-effect waves-light"><i className="mdi mdi-plus mr-1"></i> dgvrvgdref</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default RenderCardColumn;