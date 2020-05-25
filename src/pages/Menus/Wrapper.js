import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
`;
class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:false
        };
    }


    render() {
        return (
            <Wrapper>
                <Container>
                </Container>
            </Wrapper>
        );
    }
}

export default Wrapper;
