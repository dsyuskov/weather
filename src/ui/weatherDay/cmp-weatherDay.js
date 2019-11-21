import React from 'react';

export default class WeatherDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weather } = this.props;
    console.log (weather.weather.icon);
    return (
      <div className="weather-day">
        <div className="weather-day__city">{ weather.city.name }, { weather.city.country }</div>
        <div className="weather-day__date-time">Mon 28 October 17:23</div>
        <div className="weather-day__wrapper">
          <div className="weather-day__temp">
            <div className="weather-day__temp-value">{ weather.weather.temp }</div>
            <div className="weather-day__temp-deg">&deg;</div>
          </div>
          <div className="weather-day__img">
            <img src={`./images/${weather.weather.icon}.png`} />
          </div>
          <ul className="weather-day__more">
            <li className="weather-day__more-item">{ weather.weather.desc }</li>
            <li className="weather-day__more-item">feels: { weather.weather.feels } &deg;</li>
            <li className="weather-day__more-item">wind: { weather.weather.wind.speed } m/c</li>
            <li className="weather-day__more-item">humidity: { weather.weather.humidity } %</li>
          </ul>
        </div>
      </div>
    )
  }
}

// const data = {
//   id: item.id,
//   city: {
//     name: item.name,
//     country: item.sys.country,
//     coord:{
//       lat: item.coord.lat,
//       lon: item.coord.lon,
//     },
//   },
//   weather: {
//     temp: item.main.temp,
//     humidity: item.main.humidity,
//     wind: {
//       deg: item.wind.deg,
//       speed: item.wind.speed,
//     },
//   },
// }