import React, { useState } from 'react'
import ItemGradient from "./ItemGradient"
import "../css/style.css"

export default function Home() {
    const [gradientData, setGradientData] = useState(JSON.parse(localStorage.getItem("gradientData")))

    function handleDelete(id) {
        const fillterGradientData = gradientData.filter(e => {
            return e.id !== id
        })
        setGradientData(fillterGradientData)
        localStorage.setItem("gradientData", JSON.stringify(fillterGradientData))
    }

    return (
        <div className="gradient-items">
            {(!gradientData) ?
                null :
                gradientData.map(e => {
                    return <ItemGradient key={e.id} id={e.id} colorFrom={e.colorFrom} colorTo={e.colorTo} handleDelete={handleDelete} />
                })}
        </div>
    )
}
