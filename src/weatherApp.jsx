import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
       city: "Mumbai",
       temp: 30,
       tempMin: 24,
       tempMax: 35,
       humidity:70,
       weather: "Haze",
       feelsLike:24,
       sunrise:"18:45",
       sunset:"19:30",

    })
    let updateInfo = (newInfo)=>{  //this will update new location weather
        setWeatherInfo(newInfo)
    }
    return (
        <div className="weather-app" style={{textAlign:"center"}}>
            <h1 className="name">Weather App</h1>
          <SearchBox updateInfo={updateInfo} />     {/* first info update hogi */}
            <InfoBox info={weatherInfo}/>  {/* now weatherInfo state variable main value update ho gayi jo ki info box main props ke through use hogi*/}
        </div>
        )
}