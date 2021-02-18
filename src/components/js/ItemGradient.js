import React from 'react'
import { Card,Row,Col } from "react-bootstrap"
import "../css/style.css"

export default function ItemGradient(props) {
    return (

        <Card style={{ width: '80%' }} className="mb-2" className="gradient-item bg-dark text-white text-center">
            <Card.Header></Card.Header>
            <Card.Body style={{ background: `linear-gradient(to left, ${props.colorFrom}, ${props.colorTo})` }}>
                <Row>
                    <Col>{props.colorFrom}</Col>
                    <Col>{props.colorTo}</Col>
                </Row>
            </Card.Body>
        </Card>
    )
}