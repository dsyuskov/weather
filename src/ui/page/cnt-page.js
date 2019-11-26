import { connect } from 'react-redux';
import Page from './cmp-page';
import { getWeatherByCity, getWeatherByCoord } from '../../actions/weather';
import { getWeatherForecast } from '../../actions/forecast';
import { changeLang, changeUseCelsius, changeSearchString } from '../../actions/controlPanel';
import { getBackgroundImage } from "../../actions/backgroundImage";

function mapStateToProps (state) {
  const { weather, isRequest, isError } = state.weather;
  const { forecast, isRequestForecast, isErrorForecast } = state.forecast;
  const { lang, isCelsius, searchString } = state.controlPanel;
  const { backgroundImage } = state.backgroundImage;
  return { 
    searchString,
    isRequest,
    weather,
    isError,
    forecast,
    isRequestForecast,
    isErrorForecast,
    lang,
    isCelsius,
    backgroundImage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherByCity: (city) => dispatch(getWeatherByCity(city)),
    getWeatherByCoord: (lat, lon) => dispatch(getWeatherByCoord(lat, lon)),
    getWeatherForecast: (city) => dispatch(getWeatherForecast(city)),
    changeLang: (lang) => dispatch(changeLang(lang)),
    changeUseCelsius: (isCelsius) => dispatch(changeUseCelsius(isCelsius)),
    changeSearchString: (searchString) => dispatch(changeSearchString(searchString)),
    getBackgroundImage: (searchString) => dispatch(getBackgroundImage(searchString)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

