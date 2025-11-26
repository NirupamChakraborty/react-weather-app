import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updatedInfo}){

    let [city, setCity] = useState("")
    let [error, setError]= useState(false)

    const API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    let getWeatherInfo= async()=>{
    try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)

        let jsonResponse = await response.json();
        // console.log(jsonResponse)
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result)
        return result
        
    } catch (error) {
        throw error;
    }
        
    }


    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit= async(event)=>{
        try {
            event.preventDefault();
            console.log(city)
       let newInfo=  await getWeatherInfo()
       updatedInfo(newInfo)
       setError(false); 
        } catch (error) {
            setError(true)
        }
        setCity("")
        
        
    }  
    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="filled" value={city} required onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit' >Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}