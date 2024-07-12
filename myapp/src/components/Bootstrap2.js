import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap'

const Bootstrap2 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3}>Hello world</Col>
                    <Col md={9}>Good morning</Col>
                </Row>
            </Container>


            <div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Bootstrap2