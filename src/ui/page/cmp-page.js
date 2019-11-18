import React from 'react';
import Search from '../search/cmp-search'

class Page extends React.Component {
 state = {
  searchString: '',
 }

  handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim();
    console.log(event.target.value);
    this.setState({ searchString: value })
  }

  render() {
    const { searchString } = this.state;
    const { getWeather, city } = this.props;
    console.log(this.props);
    return (
      <div>
        <Search 
          value={ searchString }
          onChange={ this.handleSearch }
        />
      </div>
    )
  }
}

export default Page;