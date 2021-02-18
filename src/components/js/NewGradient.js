import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';

export default function NewGradient() {

    if (localStorage.getItem("gradientData") === null) {
        localStorage.setItem("gradientData", JSON.stringify([]))
    }

    const [colorFrom, setColorFrom] = useState("")
    const [colorTo, setColorTo] = useState("")
    const [isDisable, setIsDisable] = useState(true)
    const [gradientArray, setGradientArr] = useState(JSON.parse(localStorage.getItem("gradientData")))
    const regexp = /#[a-f0-9]{6}\b/gi

    useEffect(() => {
        localStorage.setItem("gradientData", JSON.stringify(gradientArray))
    }, [gradientArray])

    useEffect(() => {
        if (!colorFrom.match(regexp) || !colorTo.match(regexp)) {
            setIsDisable(true)
        } else {
            setIsDisable(false)
        }
    }, [colorFrom, colorTo])

    function handleAdd() {
        const gradientItem = { "id": uuidv4(), "colorFrom": colorFrom, "colorTo": colorTo }
        setGradientArr(oldArray => [...oldArray, gradientItem])
    }


    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Control size="sm" type="text" placeholder="#000000" onChange={(e) => setColorFrom(e.target.value)} required />
                    </Col>
                    <Col>
                        <Form.Control size="sm" type="text" placeholder="#ffffff" onChange={(e) => setColorTo(e.target.value)} required />
                    </Col>
                </Row>
                <Button disabled={isDisable} href="/" variant="primary" type="submit" onClick={handleAdd}>Submit </Button>
            </Form>
        </>
    )
}
