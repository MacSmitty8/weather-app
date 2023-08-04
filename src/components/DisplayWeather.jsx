import React from 'react'
import './displayWeather.css'

function DisplayWeather({data}) {
    // console.log(props)
    // const {data} = props;
    return (
        <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                {data.name}, {data.sys.country}, Weather
                </span>
                <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
                </span>
                <h1>
                    {Math.floor((data.main.temp -273.15) * 1.8)  + 32} &#8457;
                </h1>
                <span className="weather-main">
                    {data.weather[0].description}
                </span>
            </div>

        </div>
    )
}

export default DisplayWeather
