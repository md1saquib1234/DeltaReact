import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bangalore",
    feelsLike: 27.3,
    humidity: 28,
    temp: 28.4,
    tempMax: 28.4, 
    tempMin: 28.4,
    weather: "overcast clouds",
  });

  let updateInfo = (newInfo) => {
     setWeatherInfo(newInfo);
  };

  return (
    
    <div>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      {weatherInfo && <InfoBox info={weatherInfo}></InfoBox>}
    </div>
  );
}