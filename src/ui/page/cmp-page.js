import React from 'react';
import Search from '../search/cmp-search';
import WeatherDay from '../weatherDay/cmp-weatherDay';
import { Map} from '../map/map'
import { ControlPanel } from '../controlPanel/cmp-controlPanel';
import { WeatherForecastDay } from '../weatherForecastDay/cmp-weatherForecastDay';
import { getCountryName } from '../../service';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClickCelsius = this.onClickCelsius.bind(this);
    this.onClickFaringate = this.onClickFaringate.bind(this);
    this.onControlPanelChange = this.onControlPanelChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    searchString: '',
  }

  onSearchChange = event => {
    this.setState({ searchString: event.target.value});
  }

  onControlPanelChange = event => {
    this.props.changeLang(event.target.value);
  }

  onClickCelsius() {
    this.props.changeUseCelsius(true);
  }

  onClickFaringate() {
    this.props.changeUseCelsius(false);
  }

  onClick() {
    this.props.getWeather(this.state.searchString, 'metric');
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(pos => {
    //   this.props.getWeatherCoord(pos.coords.latitude, pos.coords.longitude);
    // })
    getCountryName()
      .then(result => console.log(result));
    ;
  }

  render() {
    const { searchString } = this.state;
    const { weather,  forecast, lang, isCelsius } = this.props;

    if (!weather.city) {
      return (
        <div className="wrapper">
          <header className="header">
            <ControlPanel 
              isCelsius={ isCelsius }
              onClickUpdate = { this.onClick }
              onClickFaringate = {this.onClickFaringate }
              onClickCelsius = { this.onClickCelsius }
              onChange= { this.onControlPanelChange }
            />
            <Search 
              lang={ lang }
              value={ searchString }
              onChange= { this.onSearchChange }
              onClick={ this.onClick }
            />
          </header>
        </div>
      )
    }

    return (
      <div className="wrapper">
        <header className="header">
          <ControlPanel 
            isCelsius={ isCelsius }
            onClickUpdate= { this.onClick }
            onClickFaringate = {this.onClickFaringate }
            onClickCelsius = { this.onClickCelsius }
            onChange= { this.onControlPanelChange }
          />
          <Search
            lang={ lang }
            value={ searchString }
            onChange= { this.onSearchChange }
            onClick={ this.onClick }
          />
        </header>
        <main className="main">
          <div className="weather">
            <WeatherDay
              lang={ lang }
              isCelsius={ isCelsius }
              weather={ weather }
            />
            <div className="weather-forecast">
              {forecast && <WeatherForecastDay
                lang={ lang }
                isCelsius={ isCelsius }
                forecast={ forecast[0] }
              />}
              {forecast && <WeatherForecastDay 
                lang={ lang }
                isCelsius={ isCelsius }
                forecast={ forecast[1] }
              />}
              {forecast && <WeatherForecastDay 
                lang={ lang }
                isCelsius={ isCelsius }
                forecast={ forecast[2] }
              />}
            </div>
          </div>
          <div className='mapContainer'>
          <Map 
            lat = { weather.city.coord.lat }
            lon = { weather.city.coord.lon }
          />
          </div>
        </main>
    </div>
    )
  }
}

export default Page;
