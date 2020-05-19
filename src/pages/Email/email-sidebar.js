import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Card, Media } from "reactstrap";

// Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

class EmailSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Card className="email-leftbar">
                    <Button type="button" color="danger" className="waves-effect waves-light" onClick={this.togglemodal} block>
                        Compose
                    </Button>
                    <div className="mail-list mt-4">
                        <Link to="email-inbox" className="active"><i className="mdi mdi-email-outline mr-2"></i> Inbox <span className="ml-1 float-right">(18)</span></Link>
                        <Link to="#"><i className="mdi mdi-star-outline mr-2"></i>Starred</Link>
                        <Link to="#"><i className="mdi mdi-diamond-stone mr-2"></i>Important</Link>
                        <Link to="#"><i className="mdi mdi-file-outline mr-2"></i>Draft</Link>
                        <Link to="#"><i className="mdi mdi-email-check-outline mr-2"></i>Sent Mail</Link>
                        <Link to="#"><i className="mdi mdi-trash-can-outline mr-2"></i>Trash</Link>
                    </div>

                    <h6 className="mt-4">Labels</h6>

                    <div className="mail-list mt-1">
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends</Link>
                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family</Link>
                    </div>

                    <h6 className="mt-4">Chat</h6>

                    <div className="mt-2">
                        <Link to="#" className="media">
                            <img className="d-flex mr-3 rounded-circle" src={avatar2} alt="skote" height="36" />
                            <Media className="chat-user-box" body>
                                <p className="user-title m-0">Scott Median</p>
                                <p className="text-muted">Hello</p>
                            </Media>
                        </Link>

                        <Link to="#" className="media">
                            <img className="d-flex mr-3 rounded-circle" src={avatar3} alt="skote" height="36" />
                            <Media className="chat-user-box" body>
                                <p className="user-title m-0">Julian Rosa</p>
                                <p className="text-muted">What about our next..</p>
                            </Media>
                        </Link>

                        <Link to="#" className="media">
                            <img className="d-flex mr-3 rounded-circle" src={avatar4} alt="skote" height="36" />
                            <Media className="chat-user-box" body>
                                <p className="user-title m-0">David Medina</p>
                                <p className="text-muted">Yeah everything is fine</p>
                            </Media>
                        </Link>

                        <Link to="#" className="media">
                            <img className="d-flex mr-3 rounded-circle" src={avatar6} alt="skote" height="36" />
                            <Media className="chat-user-box" body>
                                <p className="user-title m-0">Jay Baker</p>
                                <p className="text-muted">Wow that's great</p>
                            </Media>
                        </Link>

                    </div>
                </Card>

                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={this.togglemodal}>

                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            New Message
                            </ModalHeader >
                        <ModalBody>
                            <form>
                                <FormGroup>
                                    <Input type="email" className="form-control" placeholder="To" />
                                </FormGroup>

                                <FormGroup>
                                    <Input type="text" className="form-control" placeholder="Subject" />
                                </FormGroup>
                                <Editor
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                />

                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" onClick={this.togglemodal}>Close</Button>
                            <Button type="button" color="primary">Send <i className="fab fa-telegram-plane ml-1"></i></Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EmailSideBar;