import React, { Component } from 'react';
import Board from "@lourenci/react-kanban";
import { Row, Col } from "reactstrap";
import CardTaskBox from "./card-task-box";
import RenderCardTitle from "./render-card-title";

class UncontrolledBoard extends Component {

    render() {
        const content = this.props.board;
        return (
            <React.Fragment>
                <Row className="mb-4">
                    <Col>
                        <Board
                            initialBoard={content}
                            renderColumnHeader={({ title }) => (
                                <RenderCardTitle title={title} />
                            )}
                            renderCard={({ content }, { dragging }) => (
                                <CardTaskBox data={content} dragging={dragging}>
                                    {content}
                                </CardTaskBox>
                            )}
                            onNewCardConfirm={draftCard => ({
                                id: new Date().getTime(),
                                ...draftCard
                            })}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UncontrolledBoard;