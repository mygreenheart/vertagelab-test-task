import React from 'react'
import { Card, Row, Col, Button } from "react-bootstrap"
import "../css/style.css"


export default function ItemGradient(props) {
    
    return (
        <Card style={{ width: '80%' }} className="mb-2" className="gradient-item bg-dark text-white text-center">
            <Card.Header>
                <Row>
                    <Col>
                        <Button href={`/edit/${props.id}`} variant="outline-primary" size="sm">Edit</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" size="sm" onClick={() => props.handleDelete(props.id)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{ background: `linear-gradient(to left, ${props.colorTo},${props.colorFrom})` }}>
                <Row>
                    <Col>{props.colorFrom}</Col>
                    <Col>{props.colorTo}</Col>
                </Row>
            </Card.Body>
        </Card>
    )
}