import React from 'react';

export function ControlPanel(props) {
 
  let classNameCelsius;
  let classNameFaringate;

  if (props.isCelsius) {
    classNameCelsius = "button button--selected control-panel__celsius";
    classNameFaringate = "button control-panel__faringate"
  } else {
    classNameCelsius = "button control-panel__celsius"
    classNameFaringate = "button button--selected control-panel__faringate"
  }

  return(
    <div className="control-panel">
    <button 
      className="button control-panel__update"
      onClick={ props.onClickUpdate }
    ></button>
    <select 
      value={ props.value }
      onChange={ props.onChange }
      className="dropdown control-panel__lang">
      <option className="dropdown__item" value="en">en</option>
      <option className="dropdown__item" value="ru">ru</option>
    </select>
    <button 
      className={ classNameFaringate }
      onClick={ props.onClickFaringate }
    >&deg; F</button>
    <button 
      className={ classNameCelsius }
      onClick={ props.onClickCelsius }
    >&deg; C</button>
  </div>
  )
}

