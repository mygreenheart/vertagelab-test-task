import React, { useState } from 'react'
import ItemGradient from "./ItemGradient"
import "../css/style.css"

export default function Home() {
    const [gradientData, setGradientData] = useState(JSON.parse(localStorage.getItem("gradientData")))

    return (
        <div className="gradient-items">
            {(!gradientData) ?
                null :
                gradientData.map(e => {
                    return <ItemGradient key={e.id} colorFrom={e.colorFrom} colorTo={e.colorTo} />
                })}
        </div>
    )
}
