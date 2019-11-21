import React from 'react';
import Search from '../search/cmp-search';
import WeatherDay from '../weatherDay/cmp-weatherDay';
import { throttle } from 'lodash';

const COUNT_MILLISECONDS_TO_MINUT = 1000;

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.throttledOnChange = throttle(this.throttledOnChange.bind(this), 1000);
  }

  state = {
    searchString: ''
  }

  onChange = event => {
    this.throttledOnChange(event.target.value);
    this.setState({ searchString: event.target.value});
  }

  onClick(searchString) {
    console.log(searchString);
    this.props.getWeather(searchString, 'metric');
  }

  throttledOnChange = value => {
    this.props.getWeather(value);
  }

  componentDidMount() {
    console.log('start')
    //this.props.getWeather('Balashov', 'metric');
    //this.props.getWeatherForecast('579460', 'metric');
  }

  render() {
    const { searchString } = this.state;
    const { weather,  isError, isRequest } = this.props;
    console.log(this.props);
    if (!weather.city) {
      return (
        <div className="wrapper">
          <header className="header">
            <div className="control-panel">
              <button className="button control-panel__update"></button>
              <select className="dropdown control-panel__lang">
                <option className="dropdown__item" value="en">en</option>
                <option className="dropdown__item" value="ru">ru</option>
                <option className="dropdown__item" value="by">by</option>
              </select>
              <button className="button control-panel__faringate">&deg; F</button>
              <button className="button button--selected control-panel__celsius">&deg; C</button>
            </div>
              <Search 
                value={ searchString }
                onClick={ this.onClick }
              />
          </header>
        </div>
      )
    }

    return (
      <div className="wrapper">
        <header className="header">
          <div className="control-panel">
            <button className="button control-panel__update"></button>
            <select className="dropdown control-panel__lang">
              <option className="dropdown__item" value="en">en</option>
              <option className="dropdown__item" value="ru">ru</option>
              <option className="dropdown__item" value="by">by</option>
            </select>
            <button className="button control-panel__faringate">&deg; F</button>
            <button className="button button--selected control-panel__celsius">&deg; C</button>
          </div>
            <Search 
              value={ searchString }
              onClick={ this.onClick }
            />
        </header>
        <main className="main">
          <div className="weather">
            <WeatherDay 
              weather={ weather }
            />
            <div className="weather-forecast">
              <div className="weather-forecast__day">
                <div className="weather-forecast__weekday">Tuesday</div>
                <div className="weather-forecast__temp">7&deg;</div>
                <div className="weather-forecast__img">
                    <img src="./images/02d.png" />
                </div>
              </div>
              <div className="weather-forecast__day">
                <div className="weather-forecast__weekday">Wednesday</div>
                <div className="weather-forecast__temp">6&deg;</div>
                <div className="weather-forecast__img">
                    <img src="./images/02d.png" />
                </div>
              </div>
              <div className="weather-forecast__day">
                <div className="weather-forecast__weekday">Thursday</div>
                <div className="weather-forecast__temp">3&deg;</div>
                <div className="weather-forecast__img">
                    <img src="./images/02d.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <img src="images/map.png" />
          </div>
        </main>
    </div>
    )
    
    // return (
    //   <div>
    //     <Search 
    //       value={ searchString }
    //       onChange={ this.onChange }
    //     />
    //     {isError ? 
    //     <p>City not found</p> : 
    //     <div>
    //       <p>City { weather.city.name }</p> 
    //       <p>Country { weather.city.country }</p> 
    //       <p>Temp { weather.weather.temp }</p>
    //       <p>Humidity { weather.weather.humidity }</p>
    //       <p>Wind { weather.weather.wind.speed }</p>
    //       <p>dt { weather.dt }</p>
    //       <p>now { new Date().getTime() }</p>
    //       <p>Day { new Date(weather.dt * COUNT_MILLISECONDS_TO_MINUT).getFullYear() }</p>

    //     </div>
    //     }
    //   </div>
    // )
  }
}

export default Page;