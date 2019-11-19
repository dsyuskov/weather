import React from 'react';
import Search from '../search/cmp-search'
import { throttle } from 'lodash';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.throttledOnChange = throttle(this.throttledOnChange.bind(this), 1000);
  }

  state = {
    searchString: ''
  }

  onChange = event => {
    this.throttledOnChange(event.target.value);
    this.setState({ searchString: event.target.value});
  }

  throttledOnChange = value => {
    this.props.getWeather(value);
  }

  componentDidMount() {
    console.log('start')
    this.props.getWeather('Balashov');
    this.props.getWeatherForecast('579460');
  }

  render() {
    const { searchString } = this.state;
    const { weather, forecast, isError, isRequest } = this.props;
    console.log(this.props);
    if (!weather.city) {
      return (
        <Search 
          value={ searchString }
          onChange={ this.onChange }
        />
      )
    }
    
    return (
      <div>
        <Search 
          value={ searchString }
          onChange={ this.onChange }
        />
        {/* {isError ? 
        <p>City not found</p> : 
        <div>
          <p>City { weather.city.name }</p> 
          <p>Country { weather.city.country }</p> 
          <p>Temp { weather.weather.temp}</p>
          <p>Humidity { weather.weather.humidity}</p>
          <p>Wind { weather.weather.wind.speed}</p>
        </div>
        } */}
      </div>
    )
  }
}

export default Page;