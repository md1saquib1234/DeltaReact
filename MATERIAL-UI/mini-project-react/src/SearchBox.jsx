import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import "./SearchBox.css";
import Icon from '@mui/material/Icon';



export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8c5c32fbff76a09b9a15b77106eacd0c";

  let getWeatherInfo = async () => {
    try {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city:  city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  } catch (err) {
    setError(true);
  }

  };
   

  

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      if (newInfo){
      updateInfo(newInfo);
      setError(false);
      setCity("");
      }
    

    } catch (err) {
      setError(true);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
    <TextField id="city" label="City Name" variant="outlined" required
    onChange={handleChange}/>
    <br /> <br />
    <Button variant="contained" type='submit' sx={{marginBottom: "25px"}}>Search</Button>
    {error && <p style={{color: "red"}}>No such place exists!</p>}
   </form>
    </div>
  );
}