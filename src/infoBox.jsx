import "./infoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactAnimatedWeather from 'react-animated-weather';


import currentTime from './time.jsx';

export default function InfoBox({info}){
  
  const defaults = {
  icon: ["RAIN","CLEAR_DAY","SNOW"],
  color: ["goldenrod","gray"],
  size: 30,
  animate: true
};
    

 const Init_url= "https://images.unsplash.com/photo-1415663104115-8ca2c2105f54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const hot_url = "https://media.istockphoto.com/id/1162946429/photo/nature-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uj-Q-owcaGo8d0tqjefRiAJCdquGRrg10aCxv79sMhc="
 const cold_url = "https://media.istockphoto.com/id/1187230127/photo/spruce-trees.webp?a=1&b=1&s=612x612&w=0&k=20&c=172RNOWJnMwgLo5qd74rGRQfGr1CezIHFrptfIrdIbQ="
 const Rain_url = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    
    

  return (
     <div className="info-box">
        <div className="card-container">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
            info.humidity > 80
            ? Rain_url 
            : info.temp > 15 
            ? hot_url 
            : cold_url 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;
          {
            info.humidity > 80
            ?  <ReactAnimatedWeather icon={defaults.icon[0]} color={defaults.color[1]} size={defaults.size} animate={defaults.animate}/>
            : info.temp > 15 
            ? <ReactAnimatedWeather icon={defaults.icon[1]} color={defaults.color[0]} size={defaults.size} animate={defaults.animate}/>
            : <ReactAnimatedWeather icon={defaults.icon[2]} color={defaults.color[1]} size={defaults.size} animate={defaults.animate}/>
        }
        </Typography>
        <Typography variant="body2"  component={"span"} sx={{ color: 'text.secondary' }}>
          {currentTime()}
           {/* <h1  className={info.humidity > 80 ? "rainy":info.temp>15 ? "temp":"snowy"}> {info.temp}&deg;C </h1>  */}
           <h1 className={
            info.humidity > 80 ? "rainy":
            info.temp > 35 ? "hot" :
            info.temp > 20 ? "warm" :
            info.temp > 5 ? "cool" :
            "cold"
            }>
           {info.temp}&deg;C
         </h1>

           <p> Min Temp: {info.tempMin}&deg;C </p> 
           <p> Max Temp: {info.tempMax}&deg;°C </p>
           <p> Humidity: {info.humidity}&deg;% </p>
           <p> The can be describe as a <i> <b>{info.weather}</b></i> and Feels Like: {info.feelsLike}&deg;C </p>
           <p>Sunrice : {info.sunrise}</p>
           <p>Sunset : {info.sunset}</p>
           
         
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}