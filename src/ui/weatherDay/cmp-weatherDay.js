import React from 'react';

export default class WeatherDay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    currentDateTime: '',
  }

  getCurrentDateTime() {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"];
    const addSero = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
    const date = new Date();
    const dayName = dayNames[date.getDay()];
    const day = date.getDate()
    const month = monthNames[date.getMonth()];
    const hour = date.getHours() < 10 ? addSero[date.getHours()] : date.getHours();
    const min = date.getMinutes() < 10 ? addSero[date.getMinutes()] : date.getMinutes();
    this.setState( {currentDateTime:`${dayName} ${day} ${month}  ${hour}:${min}` });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getCurrentDateTime(), 10000)
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  render() {
    const { weather } = this.props;
    return (
      <div className="weather-day">
        <div className="weather-day__city">{ weather.city.name }, { weather.city.country }</div>
        <div className="weather-day__date-time">{ this.state.currentDateTime }</div>
        <div className="weather-day__wrapper">
          <div className="weather-day__temp">
            <div className="weather-day__temp-value">{ weather.weather.temp }</div>
            <div className="weather-day__temp-deg">&deg;</div>
          </div>
          <div className="weather-day__img">
            <img src={`./images/${weather.weather.icon}.png`} alt=''/>
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