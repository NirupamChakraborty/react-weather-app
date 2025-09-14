import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 39.2,
        humidity: 52,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather:"haze",
    })

    let updatedInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updatedInfo={updatedInfo}/>
        <InfoBox info={weatherInfo}/>
    </div> 
   )
}