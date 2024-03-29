import React from 'react';
import translite from '../../utils/translite';
import { celsiusToFaringate, addSero } from '../../utils/service';

export default class WeatherDay extends React.Component {
  state = {
    currentDateTime: '',
  }

  getCurrentDateTime() {
    let date = new Date();
    date.setUTCSeconds(date.getUTCSeconds()+this.props.weather.timezone);
    const dayName = translite(this.props.lang, 'shortDayName',date.getUTCDay());
    const day = date.getUTCDate()
    const month = translite(this.props.lang,'fullMonthName',date.getUTCMonth());
    const hour = addSero(date.getUTCHours());
    const min = addSero(date.getUTCMinutes());
    this.setState( {currentDateTime:`${dayName} ${day} ${month}  ${hour}:${min}` });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getCurrentDateTime(), 10);
  }

  componentWillUnmount() {
   clearInterval(this.timerID);
  }

  render() {
    const { weather, isCelsius } = this.props;
    const temp = isCelsius ? weather.weather.temp : celsiusToFaringate(weather.weather.temp);
    const feels = isCelsius ? weather.weather.feels : celsiusToFaringate(weather.weather.feels);
    return (
      <div className="weather-day">
        <div className="weather-day__city">{ weather.city.name }, { weather.city.country }</div>
        <div className="weather-day__date-time">{ this.state.currentDateTime }</div>
        <div className="weather-day__wrapper">
          <div className="weather-day__temp">
            <div className="weather-day__temp-value">{ temp }</div>
            <div className="weather-day__temp-deg">&deg;</div>
          </div>
          <div className="weather-day__img">
            <img src={`./images/${weather.weather.icon}.png`} alt=''/>
          </div>
          <ul className="weather-day__more">
            <li className="weather-day__more-item">{ translite(this.props.lang,'weather', weather.weather.id) }</li>
            <li className="weather-day__more-item">{ translite(this.props.lang,'words', 'feels') }: { feels } &deg;</li>
            <li className="weather-day__more-item">{ translite(this.props.lang,'words', 'wind') }: { weather.weather.wind.speed } m/c</li>
            <li className="weather-day__more-item">{ translite(this.props.lang,'words', 'humidity') }: { weather.weather.humidity } %</li>
          </ul>
        </div>
      </div>
    )
  }
}
