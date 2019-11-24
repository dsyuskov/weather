const word = {
  en: {
    fullDayName: {
      0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'
    },
    shortDayName: {
      0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'
    },
    fullMonthName: {
      0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June',
      6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'
    },
    weather: {
      200: 'Thunderstorm with light rain', 201: 'Thunderstorm with rain', 202: 'Thunderstorm with heavy rain',
      210: 'Light thunderstorm' , 211: 'Thunderstorm', 212: 'Heavy thunderstorm', 221: 'Ragged thunderstorm',
      230: 'Thunderstorm with light drizzle', 231: 'Thunderstorm with drizzle', 232: 'Thunderstorm with heavy drizzle',
      300: 'Light intensity drizzle', 301: 'Drizzle', 302: 'Heavy intensity drizzle', 310: 'Light intensity drizzle rain',
      311: 'Drizzle rain', 312: 'Heavy intensity drizzle rain', 313: 'Shower rain and drizzle',
      314: 'Heavy shower rain and drizzle', 321: 'Shower drizzle', 500: 'Light rain', 501: 'Moderate rain',
      502: 'Heavy intensity rain', 503: 'Very heavy rain', 504: 'Extreme rain', 511: 'Freezing rain',
      520: 'Light intensity shower rain', 521: 'Shower rain', 522: 'Heavy intensity shower rain', 531: 'Ragged shower rain',
      600: 'Light snow', 601: 'Snow', 602: 'Heavy snow', 611: 'Sleet', 612: 'Light shower sleet', 613: 'Shower sleet',
      615: 'Light rain and snow', 616: 'Rain and snow', 620: 'Light shower snow', 621: 'Shower snow', 622: 'Heavy shower snow',
      701: 'Mist', 711: 'Smoke', 721: 'Haze', 731: 'Sand / dust whirls', 741: 'Fog', 751: 'Sand', 761: 'Dust',
      762: 'Volcanic ash', 771: 'Squalls', 781: 'Tornado', 800: 'Clear sky', 801: 'Few clouds',
      802: 'Scattered clouds', 803: 'Broken clouds', 804: 'Overcast clouds',
    },
    words: {
      feels: 'Feels', wind: 'Wind', humidity: 'Humidity', search: 'Search',
    }
  },
  ru: {
    fullDayName: {
      0: 'Воскресенье', 1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота'
    },
    shortDayName: {
      0: 'Вс', 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб'
    },
    fullMonthName: {
      0: 'Января', 1: 'Февраля', 2: 'Марта', 3: 'Апреля', 4: 'Мая', 5: 'Июня',
      6: 'Июля', 7: 'Августа', 8: 'Сентяря', 9: 'Октября', 10: 'Ноября', 11: 'Декабря'
    },
    weather:{
      200: 'Гроза с небольшим дождем', 201: 'Гроза с дождем', 202: 'Гроза с сильным дождем',
      210: 'Легкая гроза', 211: 'Гроза', 212: 'Сильная гроза', 221: 'Рваная гроза',
      230: 'Гроза с моросящим дождем', 231: 'Гроза с моросящим дождем', 232: 'Гроза с сильным моросящим дождем',
      300: 'Моросящий дождь', 301: 'Морось', 302: 'Моросящий дождь', 310: 'Моросящий дождь',
      311: 'Моросящий дождь', 312: 'Моросящий дождь сильной интенсивности', 313: 'Дождь и дождь под дождем',
      314: 'Сильный дождь и дождь', 321: 'Дождь', 500: 'Слабый дождь', 501: 'Умеренный дождь',
      502: 'Сильный дождь', 503: 'Сильный дождь', 504: 'Сильный дождь', 511: 'Ледяной дождь',
      520: 'Сильный дождь под дождем', 521: 'Сильный дождь', 522: 'Сильный дождь под дождем', 531: 'Сильный дождь под дождем',
      600: 'Слабый снег', 601: 'Снег', 602: 'Сильный снегопад', 611: 'Мокрый снег', 612: 'Слабый дождь со снегом', 613: 'Мокрый душ',
      615: 'Небольшой дождь и снег', 616: 'Дождь и снег', 620: 'Легкий снегопад', 621: 'Снег под дождем', 622: 'Снег под сильным дождем',
      701: 'Туман', 711: 'Дым', 721: 'Дымка', 731: 'Песчано-пылевые вихри', 741: 'Туман', 751: 'Песок', 761: 'Пыль',
      762: 'Вулканический пепел', 771: 'Шквал', 781: 'Торнадо', 800: 'Чистое небо', 801: 'Немного облаков',
      802: 'Рассеянные облака', 803: 'Рассеянные облака', 804: 'Пасмурные облака',
    },
    words: {
      feels: 'Ощущается', wind: 'Ветер', humidity: 'Влажность', search: 'Поиск',
    }
  },
}

export function translite(lang, key, value) {
  return word[lang][key][value];
}

export function celsiusToFaringate(temp) {
  return Math.round(temp * (9 / 5) + 32);
}

export function getCountryName(code) {
  return fetch(`https://restcountries.eu/rest/v2/alpha/ru`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response;
      })
      .then(response => response.json())
      .then(item => item)
}
