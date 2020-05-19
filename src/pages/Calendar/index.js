import React, { Component } from "react";

import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const DefaultEvents = [{
    id: 1,
    title: 'Hey!',
    start: new Date().setDate(new Date().getDate() + 1),
    className: 'bg-warning text-white'
},
{
    id: 2,
    title: 'See John Deo',
    start: new Date(),
    end: new Date(),
    className: 'bg-success text-white'
},
{
    id: 3,
    title: 'Meet John Deo',
    start: new Date().setDate(new Date().getDate() + 8),
    className: 'bg-info text-white'
},
{
    id: 4,
    title: 'Buy a Theme',
    start: new Date().setDate(new Date().getDate() + 7),
    className: 'bg-primary text-white'
}];

const DefaultCategories = [
    {
        id: 1,
        title: 'New Theme Release',
        type: 'bg-success'
    },
    {
        id: 2,
        title: 'My Event',
        type: 'bg-info'
    },
    {
        id: 3,
        title: 'Meet Manager',
        type: 'bg-warning'
    },
    {
        id: 4,
        title: 'Report Error',
        type: 'bg-danger'
    },
]

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleDateClick = this.handleDateClick.bind(this);
        this.calendarComponentRef = React.createRef();

        this.state = {
            calendarWeekends: true,
            calendarEvents: DefaultEvents,
            categories: DefaultCategories,
            modal: false, modalcategory: false,
            isDragBind: false
        }

        this.toggle = this.toggle.bind(this);
        this.togglecategory = this.togglecategory.bind(this);
        this.handleValidEventSubmit = this.handleValidEventSubmit.bind(this);
        this.handleValidEventSubmitcategory = this.handleValidEventSubmitcategory.bind(this);

        // category
        this.onDrag = this.onDrag.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    componentDidMount = () => {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: '.external-event',
        });
    }

    /**
     * Handling the modal state
     */
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    togglecategory() {
        this.setState(prevState => ({
            modalcategory: !prevState.modalcategory
        }));
    }

    /**
     * Handling date click on calendar
     */
    handleDateClick = (arg) => {
        this.setState({ selectedDay: arg });
        this.toggle();
    }

    /**
     * Handling click on event on calendar
     */
    handleEventClick = (arg) => {
        const event = arg.event;
        this.setState({
            event: { id: event.id, title: event.title, title_category: event.title_category, start: event.start, className: event.classNames, category: event.classNames[0], event_category: event.classNames[0] },
            isEdit: true
        });
        this.toggle();
    }

    /**
     * Handling submit event on event form
     */
    handleValidEventSubmit = (event, values) => {
        var newEvent = {};

        if (this.state.isEdit) {
            newEvent = { id: this.state.event.id, title: values.title, classNames: values.category + ' text-white', start: this.state.event.start };
            let filteredArray = this.state.calendarEvents.filter(item => item.id + "" !== this.state.event.id + "")
            this.setState({ calendarEvents: filteredArray, event: null });
        }
        else {
            newEvent = {
                id: this.state.calendarEvents.length + 1,
                title: values['title'],
                start: this.state.selectedDay ? this.state.selectedDay.date : new Date(),
                className: values.category + ' text-white'
            };
        }

        // save new event
        this.setState({
            calendarEvents: this.state.calendarEvents.concat(newEvent),
            selectedDay: null
        });

        this.toggle();
    }
    handleValidEventSubmitcategory = (event, values) => {

        var newEvent = {};

        newEvent = {
            id: this.state.calendarEvents.length + 1,
            title: values['title_category'],
            type: values.event_category
        };
        this.state.categories.concat(newEvent);
        this.setState({
            categories: this.state.categories.concat(newEvent)
        });
        console.log(this.state.categories);

        this.togglecategory();
    }



    /**
     * On category darg event
     */
    onDrag = (event, category) => {
        event.preventDefault();
    }

    /**
     * On calendar drop event
     */
    onDrop = (event) => {
        const draggedEl = event.draggedEl;

        var newEvent = {
            id: this.state.calendarEvents.length + 1,
            title: draggedEl.innerText,
            start: event.date,
            className: draggedEl.getAttribute('data-type') + ' text-white'
        };

        // save new event
        this.setState({
            calendarEvents: this.state.calendarEvents.concat(newEvent)
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">

                    <div className="container-fluid">

                        {/* Render Breadcrumb */}
                        <Breadcrumbs title="Calendar" breadcrumbItem="Calendar" />



                        <Row>
                            <Col className="col-12">
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col lg={3}>
                                                <Button color="primary" className="font-16 btn-block" onClick={this.togglecategory}>
                                                    <i className="mdi mdi-plus-circle-outline"></i> Create New Event
                                        </Button>

                                                <div id="external-events" className="mt-3">
                                                    <p className="text-muted">Drag and drop your event or click in the calendar</p>

                                                    {this.state.categories.map((category, i) => {
                                                        return <div className={`external-event ${category.type} text-white p-1 mb-2`} key={"cat-" + category.id}
                                                            draggable onDrag={(event) => this.onDrag(event, category)} data-type={category.type}>
                                                            <i className="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i> {category.title}
                                                        </div>
                                                    })}
                                                </div>

                                                <div className="mt-5 d-none d-xl-block">
                                                    <h5 className="text-center">How It Works ?</h5>

                                                    <ul className="pl-3">
                                                        <li className="text-muted mb-3">
                                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                        </li>
                                                        <li className="text-muted mb-3">
                                                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                                                        </li>
                                                        <li className="text-muted mb-3">
                                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-9">
                                                {/* fullcalendar control */}
                                                <FullCalendar ref={this.calendarComponentRef} defaultView="dayGridMonth" plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                                    slotDuration={'00:15:00'}
                                                    minTime={'08:00:00'}
                                                    maxTime={'19:00:00'}
                                                    handleWindowResize={true}
                                                    themeSystem="bootstrap"
                                                    header={{
                                                        left: 'prev,next today',
                                                        center: 'title',
                                                        right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                                    }}
                                                    events={this.state.calendarEvents}
                                                    editable={true}
                                                    droppable={true}
                                                    eventLimit={true}
                                                    selectable={true}
                                                    dateClick={this.handleDateClick}
                                                    eventClick={this.handleEventClick}
                                                    drop={this.onDrop}
                                                    id="calendar" />

                                                {/* New/Edit event modal */}
                                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                                    <ModalHeader toggle={this.toggle} tag="h4">
                                                        Add/Edit Event
                                            </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={this.handleValidEventSubmit}>
                                                            <Row form>
                                                                <Col className="col-12">
                                                                    <AvField name="title" label="Event Name" type="text" errorMessage="Invalid name" validate={{
                                                                        required: { value: true }
                                                                    }} value={this.state.event ? this.state.event.title : ''} />
                                                                </Col>
                                                                <Col className="col-12">
                                                                    <AvField type="select" name="category" label="Select Category"
                                                                        value={this.state.event ? this.state.event.category : 'bg-primary'}>
                                                                        <option value="bg-danger">Danger</option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </AvField>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-right">
                                                                        <button type="button" className="btn btn-light mr-2" onClick={this.toggle}>Close</button>
                                                                        <button type="submit" className="btn btn-success save-event">Save</button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </AvForm>
                                                    </ModalBody>
                                                </Modal>

                                                <Modal isOpen={this.state.modalcategory} toggle={this.togglecategory} className={this.props.className}>
                                                    <ModalHeader toggle={this.togglecategory} tag="h4">
                                                        Add a category
                                            </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={this.handleValidEventSubmitcategory}>
                                                            <Row form>
                                                                <Col className="col-12">
                                                                    <AvField name="title_category" label="Category Name" type="text" errorMessage="Invalid name" validate={{
                                                                        required: { value: true }
                                                                    }} value={this.state.title_category ? this.state.event.title_category : ''} />
                                                                </Col>
                                                                <Col className="col-12">
                                                                    <AvField type="select" name="event_category" label="Choose Category Color"
                                                                        value={this.state.event ? this.state.event.event_category : 'bg-primary'}>
                                                                        <option value="bg-danger">Danger</option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </AvField>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-right">
                                                                        <button type="button" className="btn btn-light mr-2" onClick={this.togglecategory}>Close</button>
                                                                        <button type="submit" className="btn btn-success save-event">Save</button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </AvForm>
                                                    </ModalBody>
                                                </Modal>


                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Index;
