import React from 'react';
import { translite } from '../../service';

export default function Search(props){
  return (
    <div className="search">
      <form className="search__form">
        <input 
          className="search__input" 
          type="text"
          placeholder="Enter city name"
          onChange={ props.onChange }
          value={ props.value }
        />
        <button 
          className="button search__button"
          onClick={(event) => {
            props.onClick();
            event.preventDefault();
          }}
        >{ translite(props.lang, 'words', 'search') }</button>
      </form>
    </div>
  )
}
