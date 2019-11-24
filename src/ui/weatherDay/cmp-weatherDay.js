import React from 'react';
import { translite, celsiusToFaringate } from '../../service';

export default class WeatherDay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    currentDateTime: '',
  }

  getCurrentDateTime() {
    const addSero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    const date = new Date();
    const dayName = translite(this.props.lang, 'shortDayName',date.getDay());
    const day = date.getDate()
    const month = translite(this.props.lang,'fullMonthName',date.getMonth());
    const hour = date.getHours() < 10 ? addSero[date.getHours()] : date.getHours();
    const min = date.getMinutes() < 10 ? addSero[date.getMinutes()] : date.getMinutes();
    this.setState( {currentDateTime:`${dayName} ${day} ${month}  ${hour}:${min}` });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getCurrentDateTime(), 10);
  }

  componentWillMount() {
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
