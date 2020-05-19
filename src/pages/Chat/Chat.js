import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Button, Media, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Nav, NavItem, NavLink, TabContent, TabPane, Card, Form, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";
import classnames from 'classnames';

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                { id: 1, status: "offline", image: avatar2, name: "Steven Franklin", description: "Hey! there I'm available", time: "05 min", isActive: true },
                { id: 2, status: "online", image: avatar3, name: "Adam Miller", description: "I've finished it! See you so", time: "12 min", isActive: false },
                { id: 3, status: "online", image: avatar3, name: "Keith Gonzales", description: "This theme is awesome!", time: "24 min", isActive: false },
                { id: 4, status: "intermediate", image: avatar4, name: "Jose Vickery", description: "Nice to meet you", time: "1 hr", isActive: false },
                { id: 5, status: "offline", image: avatar4, name: "Mitchel Givens", description: "Hey! there I'm available", time: "3 hrs", isActive: false },
                { id: 6, status: "online", image: avatar6, name: "Stephen Hadley", description: "I've finished it! See you so", time: "5 hrs", isActive: false },
                { id: 7, status: "online", image: avatar6, name: "Keith Gonzales", description: "This theme is awesome!", time: "24 min", isActive: false },
            ],
            groups: [
                { id: 1, image: "G", name: "General" },
                { id: 1, image: "R", name: "Reporting" },
                { id: 1, image: "M", name: "Meeting" },
                { id: 1, image: "A", name: "Project A" },
                { id: 1, image: "B", name: "Project B" },
            ],
            contacts: [
                {
                    category: "A",
                    child: [
                        { id: 1, name: "Adam Miller" },
                        { id: 2, name: "Alfonso Fisher" },
                    ]
                },
                {
                    category: "B",
                    child: [
                        { id: 1, name: "Bonnie Harney" },
                    ]
                },
                {
                    category: "C",
                    child: [
                        { id: 1, name: "Charles Brown" },
                        { id: 2, name: "Carmella Jones" },
                        { id: 3, name: "Carrie Williams" },
                    ]
                },
                {
                    category: "D",
                    child: [
                        { id: 4, name: "Dolores Minter" },
                    ]
                },
            ],
            messages: [
                { id: "34", isRight: true, name: "Henry Wells", message: "Hello!", time: "10:00" },
                { id: "35", isRight: true, name: "Henry Wells", message: "How are you ?", time: "10:07" },
                { id: "36", isRight: false, name: "Steven Franklin", message: "I am fine, What about you ?", time: "10:09" },
            ],
            notification_Menu: false,
            search_Menu: false,
            settings_Menu: false,
            other_Menu: false,
            activeTab: '1',
            Chat_Box_Username: "Steven Franklin",
            Chat_Box_Username2: "Henry Wells",
            Chat_Box_User_Status: "online",
            Chat_Box_User_isActive: false,
            curMessage: ""
        };
        this.toggleNotification = this.toggleNotification.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleOther = this.toggleOther.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.UserChatOpen = this.UserChatOpen.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    toggleNotification() {
        this.setState(prevState => ({
            notification_Menu: !prevState.notification_Menu
        }));
    }

    //Toggle Chat Box Menus
    toggleSearch() {
        this.setState(prevState => ({
            search_Menu: !prevState.search_Menu
        }));
    }

    toggleSettings() {
        this.setState(prevState => ({
            settings_Menu: !prevState.settings_Menu
        }));
    }

    toggleOther() {
        this.setState(prevState => ({
            other_Menu: !prevState.other_Menu
        }));
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    //Use For Chat Box
    UserChatOpen = (id, name, status) => {

        let chatModule = [...this.state.chats];

        for (let k = 0; k < 6; k++) { chatModule[k].isActive = false; } // Enable All Option First
        chatModule[id - 1].isActive = true;

        let msg = [{ id: "39", isRight: true, name: "Henry Wells", message: "How are you ?", time: "10:07" },
        { id: "40", isRight: false, name: name, message: "I am fine, What about you ?", time: "10:09" },
        ];
        this.setState({ Chat_Box_Username: name, Chat_Box_User_Status: status, messages: msg, chats: chatModule })
    }

    addMessage() {
        let d = new Date();
        var n = d.getSeconds();
        let demoMsg = this.state.messages;
        demoMsg.push({ isRight: true, name: this.state.Chat_Box_Username2, message: this.state.curMessage, time: "00:" + n });
        this.setState({ messages: demoMsg, curMessage: "" });
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Skote" breadcrumbItem="Chat" />

                        <Row>
                            <Col lg="12">
                                <div className="d-lg-flex">
                                    <div className="chat-leftsidebar mr-lg-4">
                                        <div className="">
                                            <div className="py-4 border-bottom">
                                                <Media>
                                                    <div className="align-self-center mr-3">
                                                        <img src={avatar1} className="avatar-xs rounded-circle" alt="" />
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-15 mt-0 mb-1">Henry Wells</h5>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-circle text-success align-middle mr-1"></i> Active</p>
                                                    </Media>

                                                    <div>
                                                        <Dropdown isOpen={this.state.notification_Menu} toggle={this.toggleNotification} className="chat-noti-dropdown active">
                                                            <DropdownToggle className="btn" tag="i">
                                                                <i className="bx bx-bell bx-tada"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </div>
                                                </Media>
                                            </div>

                                            <div className="search-box chat-search-box py-4">
                                                <div className="position-relative">
                                                    <Input type="text" className="form-control" placeholder="Search..." />
                                                    <i className="bx bx-search-alt search-icon"></i>
                                                </div>
                                            </div>

                                            <div className="chat-leftsidebar-nav">
                                                <Nav pills justified>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '1' })}
                                                            onClick={() => { this.toggleTab('1'); }}
                                                        >
                                                            <i className="bx bx-chat font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Chat</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.toggleTab('2'); }}
                                                        >
                                                            <i className="bx bx-group font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Group</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '3' })}
                                                            onClick={() => { this.toggleTab('3'); }}
                                                        >
                                                            <i className="bx bx-book-content font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Contacts</span>
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={this.state.activeTab} className="py-4">
                                                    <TabPane tabId="1">
                                                        <div>
                                                            <h5 className="font-size-14 mb-3">Recent</h5>
                                                            <ul className="list-unstyled chat-list">
                                                                <PerfectScrollbar style={{ height: "410px" }}>
                                                                    {
                                                                        this.state.chats.map((chat) =>
                                                                            <li key={chat.id + chat.status} className={chat.isActive ? "active" : ""}>
                                                                                <Link to="#" onClick={() => { this.UserChatOpen(chat.id, chat.name, chat.status) }}>
                                                                                    <Media>
                                                                                        <div className="align-self-center mr-3">
                                                                                            <i className={chat.status === "online"
                                                                                                ? "mdi mdi-circle text-success font-size-10"
                                                                                                : chat.status === "intermediate" ? "mdi mdi-circle text-warning font-size-10" : "mdi mdi-circle font-size-10"
                                                                                            }></i>
                                                                                        </div>
                                                                                        <div className="align-self-center mr-3">
                                                                                            <img src={chat.image} className="rounded-circle avatar-xs" alt="" />
                                                                                        </div>

                                                                                        <Media className="overflow-hidden" body>
                                                                                            <h5 className="text-truncate font-size-14 mb-1">{chat.name}</h5>
                                                                                            <p className="text-truncate mb-0">{chat.description}</p>
                                                                                        </Media>
                                                                                        <div className="font-size-11">{chat.time}</div>
                                                                                    </Media>
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    }
                                                                </PerfectScrollbar>
                                                            </ul>
                                                        </div>
                                                    </TabPane>

                                                    <TabPane tabId="2">
                                                        <h5 className="font-size-14 mb-3">Group</h5>
                                                        <ul className="list-unstyled chat-list">
                                                            <PerfectScrollbar style={{ height: "410px" }}>
                                                                {
                                                                    this.state.groups.map((group) =>
                                                                        <li key={"test" + group.image}>
                                                                            <Link to="#" onClick={() => { this.UserChatOpen(group.name, group.status) }}>
                                                                                <Media className="align-items-center">
                                                                                    <div className="avatar-xs mr-3">
                                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                            {group.image}
                                                                                        </span>
                                                                                    </div>

                                                                                    <Media body>
                                                                                        <h5 className="font-size-14 mb-0">{group.name}</h5>
                                                                                    </Media>
                                                                                </Media>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </PerfectScrollbar>
                                                        </ul>
                                                    </TabPane>

                                                    <TabPane tabId="3">
                                                        <h5 className="font-size-14 mb-3">Contact</h5>

                                                        <div>
                                                            <PerfectScrollbar style={{ height: "410px" }}>
                                                                {
                                                                    this.state.contacts.map((contact) =>
                                                                        <div key={"test_" + contact.category} className={contact.category === "A" ? "" : "mt-4"}>
                                                                            <div className="avatar-xs mb-3">
                                                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                    {contact.category}
                                                                                </span>
                                                                            </div>

                                                                            <ul className="list-unstyled chat-list">
                                                                                {
                                                                                    contact.child.map((array) =>
                                                                                        <li key={"test" + array.id}>
                                                                                            <Link to="#" onClick={() => { this.UserChatOpen(array.name, array.status) }}>
                                                                                                <h5 className="font-size-14 mb-0">{array.name}</h5>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                }
                                                            </PerfectScrollbar>
                                                        </div>

                                                    </TabPane>
                                                </TabContent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 user-chat">
                                        <Card>
                                            <div className="p-4 border-bottom ">
                                                <Row>
                                                    <Col md="4" xs="9">
                                                        <h5 className="font-size-15 mb-1">{this.state.Chat_Box_Username}</h5>

                                                        <p className="text-muted mb-0">
                                                            <i className={this.state.Chat_Box_User_Status === "online"
                                                                ? "mdi mdi-circle text-success align-middle mr-1"
                                                                : this.state.Chat_Box_User_Status === "intermediate" ? "mdi mdi-circle text-warning align-middle mr-1" : "mdi mdi-circle align-middle mr-1"
                                                            }></i>
                                                            {this.state.Chat_Box_User_Status}</p>
                                                    </Col>
                                                    <Col md="8" xs="3">
                                                        <ul className="list-inline user-chat-nav text-right mb-0">
                                                            <li className="list-inline-item d-none d-sm-inline-block">
                                                                <Dropdown isOpen={this.state.search_Menu} toggle={this.toggleSearch}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-search-alt-2"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu className="dropdown-menu-md" right>
                                                                        <Form className="p-3">
                                                                            <FormGroup className="m-0">
                                                                                <InputGroup>
                                                                                    <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                                                    <InputGroupAddon addonType="append">
                                                                                        <Button color="primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                                                                                    </InputGroupAddon>
                                                                                </InputGroup>
                                                                            </FormGroup>
                                                                        </Form>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </li>
                                                            <li className="list-inline-item  d-none d-sm-inline-block">
                                                                <Dropdown isOpen={this.state.settings_Menu} toggle={this.toggleSettings}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-cog"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right>
                                                                        <DropdownItem href="#">View Profile</DropdownItem>
                                                                        <DropdownItem href="#">Clear chat</DropdownItem>
                                                                        <DropdownItem href="#">Muted</DropdownItem>
                                                                        <DropdownItem href="#">Delete</DropdownItem>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Dropdown isOpen={this.state.other_Menu} toggle={this.toggleOther}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right>
                                                                        <DropdownItem href="#">Action</DropdownItem>
                                                                        <DropdownItem href="#">Another Action</DropdownItem>
                                                                        <DropdownItem href="#">Something else</DropdownItem>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </li>

                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div>
                                                <div className="chat-conversation p-3">
                                                    <ul className="list-unstyled">
                                                        <PerfectScrollbar style={{ height: "470px" }}>
                                                            <li>
                                                                <div className="chat-day-title">
                                                                    <span className="title">Today</span>
                                                                </div>
                                                            </li>
                                                            {
                                                                this.state.messages.map((message) =>
                                                                    <li key={"test_k" + message.id} className={message.isRight ? "right" : ""}>
                                                                        <div className="conversation-list">
                                                                            <UncontrolledDropdown>
                                                                                <DropdownToggle href="#" className="btn nav-btn" tag="i">
                                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                                </DropdownToggle>
                                                                                <DropdownMenu direction="right">
                                                                                    <DropdownItem href="#">Copy</DropdownItem>
                                                                                    <DropdownItem href="#">Save</DropdownItem>
                                                                                    <DropdownItem href="#">Forward</DropdownItem>
                                                                                    <DropdownItem href="#">Delete</DropdownItem>
                                                                                </DropdownMenu>
                                                                            </UncontrolledDropdown>
                                                                            <div className="ctext-wrap">
                                                                                <div className="conversation-name">{message.name}</div>
                                                                                <p>
                                                                                    {message.message}
                                                                                </p>
                                                                                <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> {message.time}</p>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                )
                                                            }
                                                        </PerfectScrollbar>
                                                    </ul>
                                                </div>
                                                <div className="p-3 chat-input-section">
                                                    <Row>
                                                        <Col>
                                                            <div className="position-relative">
                                                                <input type="text" value={this.state.curMessage} onChange={(e) => { this.setState({ curMessage: e.target.value }) }} className="form-control chat-input" placeholder="Enter Message..." />
                                                                <div className="chat-input-links">
                                                                    <ul className="list-inline mb-0">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-emoticon-happy-outline" id="Emojitooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Emojitooltip">
                                                                                    Emojis
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-file-image-outline" id="Imagetooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Imagetooltip">
                                                                                    Images
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-file-document-outline" id="Filetooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Filetooltip">
                                                                                    Add Files
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Button type="button" color="primary" onClick={this.addMessage} className="btn-rounded chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">Send</span> <i className="mdi mdi-send"></i></Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Chat;