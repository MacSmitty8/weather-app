import React from 'react'
import './weather.css'
import { useState } from 'react'

function Weather() {

    const APIKEY = "5f43536296f501fa7505245bb781e4b7"
    //FETCHING WEATHER DATA

    async function weatherData(e) {
    e.preventDefault()
        //checking if the input has a value
        if(form.city == ""){
            alert("Add Values")
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`) 
            const res = await data.json()
            console.log(res);
        }
    }
    
    
    const [form, setForm] = useState({
        city: '',
        country: ''
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if(name == "city"){
            setForm({
                ...form,
                city: value
            });
        }
        if(name == "country"){
            setForm({
                ...form,
                country: value
            });
        }
        
    };
    // console.log(form.city, form.country)
  return (
    <div className="weather">
      <span className="title"> Weather App </span>
      <br />
      <form action="">
        <input type="text" name="city" placeholder="city" onChange={handleChange}/>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="text" name="country" placeholder="country" onChange={handleChange}/>
        <button className="getWeather" onClick={weatherData}>Submit</button>
      </form>
    </div>
  )
}

export default Weather
