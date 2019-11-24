export const CHANGE_LANG  = 'CHANGE_LANG';
export const CHANGE_USE_CELSIUS  = 'USE_CELSIUS';

export const changeLang = lang => {
  return {
    type: CHANGE_LANG,
    payload: lang,
  }
}

export const changeUseCelsius = isCelsius => {
  return {
    type: CHANGE_USE_CELSIUS,
    payload: isCelsius,
  }
}
