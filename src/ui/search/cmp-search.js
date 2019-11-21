import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <form className="search__form">
          <input 
            className="search__input" 
            type="text"
            placeholder="Enter city name"
            onChange={ this.onChange }
            value={ this.state.search }
          />
          <button 
            className="button search__button"
            onClick={(event) => {
              this.props.onClick(this.state.search);
              event.preventDefault();
            }}
          >Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
