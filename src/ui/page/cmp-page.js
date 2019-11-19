import React from 'react';
import Search from '../search/cmp-search'
import { throttle } from 'lodash';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.throttledOnChange = throttle(this.throttledOnChange.bind(this), 3000);
  }
  
  state = {
    searchString: ''
  }

  componentWillMount() {
    console.log(this.props.getTemp('balashov'));
  }
  

  onChange = event => {
    this.throttledOnChange(event.target.value);
    this.setState({ searchString: event.target.value});
  }

  throttledOnChange = value => {
    this.props.getTemp(value);
  }
  
  componentDidMount() {
    
  }

  render() {    
    const { searchString } = this.state;
    const { city } = this.props;    
    console.log(this.props);
    console.log(city);
    return (
      <div>
        <Search 
          value={searchString}
          onChange={ this.onChange }
        />
      </div>
    )
  }
}

export default Page;