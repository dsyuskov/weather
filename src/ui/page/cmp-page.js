import React from 'react';
import Search from '../search/cmp-search';
import WeatherDay from '../weatherDay/cmp-weatherDay';
import { Map} from '../map/map'
import { ControlPanel } from '../controlPanel/cmp-controlPanel';
import { WeatherForecastDay } from '../weatherForecastDay/cmp-weatherForecastDay';
import { getCountryName } from '../../service';
import backgroundImage from '../../reducers/backgroundImage';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClickCelsius = this.onClickCelsius.bind(this);
    this.onClickFaringate = this.onClickFaringate.bind(this);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchChange = event => {
    this.props.changeSearchString(event.target.value);
  }

  onChangeLang = event => {
    this.props.changeLang(event.target.value);
    localStorage.setItem('lang', event.target.value);
  }

  onClickCelsius() {
    this.props.changeUseCelsius(true);
    localStorage.setItem('isCelsius', true);
  }

  onClickFaringate() {
    this.props.changeUseCelsius(false);
    localStorage.setItem('isCelsius', false);
  }

  onClick() {
    this.props.getBackgroundImage('rain, morning');
    // this.props.getWeatherByCity(this.props.searchString, 'metric');
    // localStorage.setItem('searchString', this.props.searchString); 
  }

  loadSetting() {
    this.props.getBackgroundImage('rain, morning');
    if (this.props.isCelsius === 'true') {
      this.onClickCelsius();
    } else {
      this.onClickFaringate();
    }
  }
  componentDidUpdate() {
    //this.props.getBackgroundImage('moscow');
  }
  componentDidMount() {
     this.loadSetting();

    if (this.props.searchString === '') {
      navigator.geolocation.getCurrentPosition(
        (pos => {this.props.getWeatherByCoord(pos.coords.latitude, pos.coords.longitude)}),
        this.props.getWeatherByCoord,
      );
    } else {
      this.props.getWeatherByCity(this.props.searchString, 'metric');
    }
    
  }

  render() {
    const { weather,  forecast, lang, isCelsius, searchString, backgroundImage } = this.props;
    console.log(backgroundImage);
    const wrapperStyle = {
      backgroundImage: `url(${backgroundImage})`
    }
    if (!weather.city) {
      return (
        <div className="wrapper" style={ wrapperStyle }>
          <header className="header">
            <ControlPanel 
              value = { lang }
              isCelsius = { isCelsius }
              onClickUpdate = { this.onClick }
              onClickFaringate = {this.onClickFaringate }
              onClickCelsius = { this.onClickCelsius }
              onChangeLang= { this.onChangeLang }
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
      <div className="wrapper" style={ wrapperStyle }>
        <header className="header">
          <ControlPanel 
            value = { lang }
            isCelsius={ isCelsius }
            onClickUpdate= { this.onClick }
            onClickFaringate = {this.onClickFaringate }
            onClickCelsius = { this.onClickCelsius }
            onChangeLang= { this.onChangeLang }
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
