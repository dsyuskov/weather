import { connect } from 'react-redux';
import Page from './cmp-page';
import { getWeather, getWeatherCoord } from '../../actions/weather';
import { getWeatherForecast } from '../../actions/forecast';
import { changeLang, changeUseCelsius } from '../../actions/controlPanel';
import { getCoord }  from "../../actions/coordByIp";

function mapStateToProps (state) {
  const { weather, isRequest, isError } = state.weather;
  const { forecast, isRequestForecast, isErrorForecast } = state.forecast;
  const { lang, isCelsius } = state.controlPanel;
  const { coord } = state.coordByIp;
  return { 
    isRequest,
    weather,
    isError,
    forecast,
    isRequestForecast,
    isErrorForecast,
    lang,
    isCelsius,
    coord,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city) => dispatch(getWeather(city)),
    getWeatherCoord: (lat, lon) => dispatch(getWeatherCoord(lat, lon)),
    getWeatherForecast: (city) => dispatch(getWeatherForecast(city)),
    changeLang: (lang) => dispatch(changeLang(lang)),
    changeUseCelsius: (isCelsius) => dispatch(changeUseCelsius(isCelsius)),
    getCoord: () => dispatch(getCoord()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
