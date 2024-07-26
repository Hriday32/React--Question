import React, { useEffect, useState } from "react";

const Question15 = () => {
  const [weather, setweather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=b1b15e88fa797225412429c1c50c122a1`
        )
          .then((response) => response.json())
          .then((data) => setweather(data));
      });
    }
  }, []);
  return (
    <div>
      {weather ? (
        <div>
          <h2>Current weather</h2>
          <p>Temperature:{weather.main.temp}</p>
          <p>Condition:{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>loading .....</p>
      )}
    </div>
  );
};

export default Question15;
