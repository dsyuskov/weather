import { connect } from 'react-redux';
import Page from './cmp-page';
import { getWeather } from '../../actions/weather'
import { getWeatherForecast } from '../../actions/forecast'

function mapStateToProps (state) {
  const { weather, isRequest, isError } = state.weather;
  const { forecast, isRequestForecast, isErrorForecast } = state.forecast;
  return { 
    isRequest,
    weather,
    isError,
    forecast,
    isRequestForecast,
    isErrorForecast,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (url) => dispatch(getWeather(url)),
    getWeatherForecast: (url) => dispatch(getWeatherForecast(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
