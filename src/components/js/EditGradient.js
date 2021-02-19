import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from "react-bootstrap"

export default function EditGradient(props) {
    const colorId = props.match.params.id;
    const [gradientArray, setGradientArr] = useState(JSON.parse(localStorage.getItem("gradientData")))
    const color = []

    gradientArray.forEach(e => {
        if (e.id === colorId) {
            color[0] = e.colorFrom
            color[1] = e.colorTo
        }
    })
    console.log(colorId)
    const regexp = /#[a-f0-9]{6}\b/gi
    const [colorFrom, setColorFrom] = useState(color[0])
    const [colorTo, setColorTo] = useState(color[1])
    const [isDisable, setIsDisable] = useState(true)

    useEffect(() => {
        localStorage.setItem("gradientData", JSON.stringify(gradientArray))
    }, [gradientArray])



    useEffect(() => {
        if (!colorFrom.match(regexp) || !colorTo.match(regexp)) {
            setIsDisable(true)
        } else {
            setIsDisable(false)
        }
    }, [colorFrom, colorTo, colorId])

    function handleEdit() {
        const gradientItem = { "id": colorId, "colorFrom": colorFrom, "colorTo": colorTo }
        const fillterArr = gradientArray.map(e => {
            if (e.id === colorId) {
                return e = gradientItem
            } else {
                return e
            }
        })
        setGradientArr(fillterArr)
    }

    return (
        <Form>
            <h1 className="header-text">Edit gradient</h1>
            <Row>
                <Col>
                    <Form.Control size="sm" type="text" placeholder={colorFrom} onChange={(e) => setColorFrom(e.target.value)} required />
                </Col>
                <Col>
                    <Form.Control size="sm" type="text" placeholder={colorTo} onChange={(e) => setColorTo(e.target.value)} required />
                </Col>
            </Row>
            <div className="btn-container">
                <Button disabled={isDisable} href="/" variant="primary" type="submit" onClick={handleEdit}>Edit gradient</Button>
            </div>
        </Form>
    )
}
