import React from 'react';
import { celsiusToFaringate } from '../../utils/service';
import translite from '../../utils/translite';

export function WeatherForecastDay(props) {
  const { lang, forecast, isCelsius } = props;
  const temp = isCelsius ? forecast.temp : celsiusToFaringate(forecast.temp);
  return (
    <div className="weather-forecast__day">
      <div className="weather-forecast__weekday">{ translite(lang, 'fullDayName', forecast.weekDay) }</div>
      <div className="weather-forecast__temp">
         { temp }
&deg;
              </div>
      <div className="weather-forecast__img">
         <img src={`./images/${forecast.icon}.png`} alt="" />
       </div>
    </div>
  );
}
