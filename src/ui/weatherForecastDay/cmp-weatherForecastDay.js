import React from 'react';

export function WeatherForecastDay(props) {
  console.log( props.forecast );
  return(
     <div className="weather-forecast__day">
      <div className="weather-forecast__weekday">{ props.forecast.weekDay }</div>
    
    </div>
  )
}

//   <div className="weather-forecast__temp">{ props.forecast.temp }&deg;</div>
    //   <div className="weather-forecast__img">
    //       <img src={`./images/${ props.forecast.icon }.png`} alt=''/>
    //   </div>