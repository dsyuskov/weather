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
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
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
    const { timesOfDay, season, weatherForBackground, searchString } = this.props;
    this.props.getBackgroundImage(`${timesOfDay}, ${season}, ${weatherForBackground}`);

    this.props.getWeatherByCity(searchString, 'metric');
    localStorage.setItem('searchString', searchString); 
  }

  onUpdateClick() {
    const { timesOfDay, season, weatherForBackground } = this.props;
    this.props.getBackgroundImage(`${timesOfDay}, ${season}, ${weatherForBackground}`);
  }

  loadSetting() {
    if (this.props.isCelsius === 'true') {
      this.onClickCelsius();
    } else {
      this.onClickFaringate();
    }
  }

  componentDidUpdate() {
    document.body.style.background = `url("${this.props.backgroundImage}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center center';
  }

  componentDidMount() {
    const { timesOfDay, season, weatherForBackground, searchString } = this.props;

    this.loadSetting();

    if (this.props.searchString === '') {
      navigator.geolocation.getCurrentPosition(
        (pos => {this.props.getWeatherByCoord(pos.coords.latitude, pos.coords.longitude)}),
        this.props.getWeatherByCoord,
      );
    } else {
      this.props.getWeatherByCity(searchString, 'metric');
    }

    this.props.getBackgroundImage(`${timesOfDay}, ${season}, ${weatherForBackground}`);

  }

  render() {
    const { weather,  forecast, lang, isCelsius, searchString, isRequest, isRequestForecast } = this.props;

    if (isRequest || isRequestForecast) {
      return <div className="async-spinner"></div>
    }

    console.log(this.props);
    if (!weather.city) {
      return (
        <div className="wrapper">
          <header className="header">
            <ControlPanel 
              value = { lang }
              isCelsius = { isCelsius }
              onClickUpdate = { this.onUpdateClick }
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
      <div className="wrapper">
        <header className="header">
          <ControlPanel 
            value = { lang }
            isCelsius={ isCelsius }
            onClickUpdate= { this.onUpdateClick }
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
          <Map
            lang={ lang }
            lat = { weather.city.coord.lat }
            lon = { weather.city.coord.lon }
          />
        </main>
    </div>
    )
  }
}

export default Page;
