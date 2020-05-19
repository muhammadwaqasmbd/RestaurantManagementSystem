import React, { Component } from 'react';

class LiHorizontalTimeline extends Component {

    render() {
        return (
            <React.Fragment>
                <li className="list-inline-item event-list">
                    <div className="mt-4">
                        <div className="px-3">
                            <p className="text-muted mb-4">{this.props.event.description}</p>
                        </div>

                        <div className="event-up-icon">
                            <i className={this.props.event.id === 3 ? "bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon bx-fade-up" : "bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon"}></i>
                        </div>
                        <div className="event-date mt-3">
                            <div className="text-primary">{this.props.event.date}</div>
                            <h5 className=" mt-2">{this.props.event.title}</h5>
                        </div>
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

export default LiHorizontalTimeline;
