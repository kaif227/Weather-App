import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"


export default function SearchBox({updateInfo}){

  const [city,setCity] = useState("");
  let [error,setError]=useState(false)



  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  


  let getWeatherInfo =async ()=>{
  let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);  //&units=metrics use to get temprature in normal form
  let data = await response.json();
  console.log(data)


  let timestamp = data.sys.sunset
  let sunset = new Date(timestamp * 1000).toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true 
});

  let timestamp2 = data.sys.sunrise
  let sunrise = new Date(timestamp2 * 1000).toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true 
});
  


  try{
    let result = {
    city: data.name,
    temp: Math.floor(data.main.temp),
    tempMin:  Math.floor(data.main.temp_min),
    tempMax:  Math.floor(data.main.temp_max),
    humidity: data.main.humidity,
    weather: data.weather[0].description,
    feelsLike: Math.floor(data.main.feels_like),
    sunrise : sunrise,
    sunset : sunset
  }
  console.log(result)

  return result 
  }catch(e){
    throw e
  }
  }
  
    let handleChange = (e)=>{
      setCity(e.target.value)
    }
    let handleSubmit = async (e)=>{
   try{
     e.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
   }catch(e){
    setError(true)
   }
  }

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic"  label="City name" value={city} onChange={handleChange} variant="outlined" required/>
                <br /><br />
                <Button type='submit' variant="contained" size='small'>Search</Button>
                {error && <div style={{color:"red",marginTop:"5px"}}>No such place found</div>}
            </form>
        </div>
    )
}