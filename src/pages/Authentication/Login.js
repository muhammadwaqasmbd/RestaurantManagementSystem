import React, { Component } from 'react';

import { Row, Col, CardBody, Card, Alert } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { loginUser,apiError } from '../../store/actions';

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import SweetAlert from "react-bootstrap-sweetalert";

var Loader = require('react-loader');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded:true
        }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.setState({
            loaded:false
        })
        this.props.loginUser(values, this.props.history);
    }

    componentDidMount()
    {
        this.props.apiError("");
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('userId');
        localStorage.removeItem('isStuff');
        localStorage.removeItem('restaurantId');
        localStorage.removeItem('username');
        localStorage.removeItem("loginFailed");
    }

    render() {
        return (
            <React.Fragment>
                {localStorage.getItem("loginFailed") == "true" ? (
                <SweetAlert
                    error
                    title={"Failed"}
                    onConfirm={() => window.location.reload()}
                    >
                    {"Login Failed!"}
                    </SweetAlert>
                    ) : null}
                <div className="account-pages my-5 pt-sm-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="overflow-hidden">
                                    <div className="bg-soft-primary">
                                        <Row>
                                            <Col className="col-7">
                                                <div className="text-primary p-4">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Sign in to continue to ORDER ME ADMIN.</p>
                                                </div>
                                            </Col>
                                            <Col className="col-5 align-self-end">
                                                <img src={profile} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <CardBody className="pt-0">
                                        <div>
                                            <Link to="/">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <span className="avatar-title rounded-circle bg-light">
                                                        <img src={logo} alt="" className="rounded-circle" height="34" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="p-2">
                                            <Loader loaded={this.state.loaded}>
                                            <AvForm className="form-horizontal" onValidSubmit={this.handleValidSubmit}>

                                                {this.props.error && this.props.error ? <Alert color="danger">{this.props.error}</Alert> : null}

                                                <div className="form-group">
                                                    <AvField name="email" label="Username" value="" className="form-control" placeholder="Enter username" type="username" required />
                                                </div>

                                                <div className="form-group">
                                                    <AvField name="password" label="Password" value="" type="password" required placeholder="Enter Password" />
                                                </div>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                </div>

                                                <div className="mt-3">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <Link to="/forget-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
                                                </div>
                                            </AvForm>
                                            </Loader>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Don't have an account ? <Link to="register" className="font-weight-medium text-primary"> Signup now </Link> </p>
                                    <p>© {new Date().getFullYear()} ORDER ME. Crafted with <i className="mdi mdi-heart text-danger"></i> </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { error } = state.Login;
    return { error };
}

export default withRouter(connect(mapStatetoProps, { loginUser,apiError })(Login));

