(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=a(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(5),l=a(6),u=a(9),h=a(7),d=a(2),m=a(10),p={en:{fullDayName:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},shortDayName:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},fullMonthName:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},weather:{200:"Thunderstorm with light rain",201:"Thunderstorm with rain",202:"Thunderstorm with heavy rain",210:"Light thunderstorm",211:"Thunderstorm",212:"Heavy thunderstorm",221:"Ragged thunderstorm",230:"Thunderstorm with light drizzle",231:"Thunderstorm with drizzle",232:"Thunderstorm with heavy drizzle",300:"Light intensity drizzle",301:"Drizzle",302:"Heavy intensity drizzle",310:"Light intensity drizzle rain",311:"Drizzle rain",312:"Heavy intensity drizzle rain",313:"Shower rain and drizzle",314:"Heavy shower rain and drizzle",321:"Shower drizzle",500:"Light rain",501:"Moderate rain",502:"Heavy intensity rain",503:"Very heavy rain",504:"Extreme rain",511:"Freezing rain",520:"Light intensity shower rain",521:"Shower rain",522:"Heavy intensity shower rain",531:"Ragged shower rain",600:"Light snow",601:"Snow",602:"Heavy snow",611:"Sleet",612:"Light shower sleet",613:"Shower sleet",615:"Light rain and snow",616:"Rain and snow",620:"Light shower snow",621:"Shower snow",622:"Heavy shower snow",701:"Mist",711:"Smoke",721:"Haze",731:"Sand / dust whirls",741:"Fog",751:"Sand",761:"Dust",762:"Volcanic ash",771:"Squalls",781:"Tornado",800:"Clear sky",801:"Few clouds",802:"Scattered clouds",803:"Broken clouds",804:"Overcast clouds"},words:{feels:"Feels",wind:"Wind",humidity:"Humidity",search:"Search"}},ru:{fullDayName:{0:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",1:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",2:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",3:"\u0421\u0440\u0435\u0434\u0430",4:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",5:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",6:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430"},shortDayName:{0:"\u0412\u0441",1:"\u041f\u043d",2:"\u0412\u0442",3:"\u0421\u0440",4:"\u0427\u0442",5:"\u041f\u0442",6:"\u0421\u0431"},fullMonthName:{0:"\u042f\u043d\u0432\u0430\u0440\u044f",1:"\u0424\u0435\u0432\u0440\u0430\u043b\u044f",2:"\u041c\u0430\u0440\u0442\u0430",3:"\u0410\u043f\u0440\u0435\u043b\u044f",4:"\u041c\u0430\u044f",5:"\u0418\u044e\u043d\u044f",6:"\u0418\u044e\u043b\u044f",7:"\u0410\u0432\u0433\u0443\u0441\u0442\u0430",8:"\u0421\u0435\u043d\u0442\u044f\u0440\u044f",9:"\u041e\u043a\u0442\u044f\u0431\u0440\u044f",10:"\u041d\u043e\u044f\u0431\u0440\u044f",11:"\u0414\u0435\u043a\u0430\u0431\u0440\u044f"},weather:{200:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0434\u043e\u0436\u0434\u0435\u043c",201:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u0434\u043e\u0436\u0434\u0435\u043c",202:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u0441\u0438\u043b\u044c\u043d\u044b\u043c \u0434\u043e\u0436\u0434\u0435\u043c",210:"\u041b\u0435\u0433\u043a\u0430\u044f \u0433\u0440\u043e\u0437\u0430",211:"\u0413\u0440\u043e\u0437\u0430",212:"\u0421\u0438\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u043e\u0437\u0430",221:"\u0420\u0432\u0430\u043d\u0430\u044f \u0433\u0440\u043e\u0437\u0430",230:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u043c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u043c \u0434\u043e\u0436\u0434\u0435\u043c",231:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u043c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u043c \u0434\u043e\u0436\u0434\u0435\u043c",232:"\u0413\u0440\u043e\u0437\u0430 \u0441 \u0441\u0438\u043b\u044c\u043d\u044b\u043c \u043c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u043c \u0434\u043e\u0436\u0434\u0435\u043c",300:"\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c",301:"\u041c\u043e\u0440\u043e\u0441\u044c",302:"\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c",310:"\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c",311:"\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c",312:"\u041c\u043e\u0440\u043e\u0441\u044f\u0449\u0438\u0439 \u0434\u043e\u0436\u0434\u044c \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0438",313:"\u0414\u043e\u0436\u0434\u044c \u0438 \u0434\u043e\u0436\u0434\u044c \u043f\u043e\u0434 \u0434\u043e\u0436\u0434\u0435\u043c",314:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c \u0438 \u0434\u043e\u0436\u0434\u044c",321:"\u0414\u043e\u0436\u0434\u044c",500:"\u0421\u043b\u0430\u0431\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",501:"\u0423\u043c\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",502:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",503:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",504:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",511:"\u041b\u0435\u0434\u044f\u043d\u043e\u0439 \u0434\u043e\u0436\u0434\u044c",520:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c \u043f\u043e\u0434 \u0434\u043e\u0436\u0434\u0435\u043c",521:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c",522:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c \u043f\u043e\u0434 \u0434\u043e\u0436\u0434\u0435\u043c",531:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0436\u0434\u044c \u043f\u043e\u0434 \u0434\u043e\u0436\u0434\u0435\u043c",600:"\u0421\u043b\u0430\u0431\u044b\u0439 \u0441\u043d\u0435\u0433",601:"\u0421\u043d\u0435\u0433",602:"\u0421\u0438\u043b\u044c\u043d\u044b\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434",611:"\u041c\u043e\u043a\u0440\u044b\u0439 \u0441\u043d\u0435\u0433",612:"\u0421\u043b\u0430\u0431\u044b\u0439 \u0434\u043e\u0436\u0434\u044c \u0441\u043e \u0441\u043d\u0435\u0433\u043e\u043c",613:"\u041c\u043e\u043a\u0440\u044b\u0439 \u0434\u0443\u0448",615:"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0434\u043e\u0436\u0434\u044c \u0438 \u0441\u043d\u0435\u0433",616:"\u0414\u043e\u0436\u0434\u044c \u0438 \u0441\u043d\u0435\u0433",620:"\u041b\u0435\u0433\u043a\u0438\u0439 \u0441\u043d\u0435\u0433\u043e\u043f\u0430\u0434",621:"\u0421\u043d\u0435\u0433 \u043f\u043e\u0434 \u0434\u043e\u0436\u0434\u0435\u043c",622:"\u0421\u043d\u0435\u0433 \u043f\u043e\u0434 \u0441\u0438\u043b\u044c\u043d\u044b\u043c \u0434\u043e\u0436\u0434\u0435\u043c",701:"\u0422\u0443\u043c\u0430\u043d",711:"\u0414\u044b\u043c",721:"\u0414\u044b\u043c\u043a\u0430",731:"\u041f\u0435\u0441\u0447\u0430\u043d\u043e-\u043f\u044b\u043b\u0435\u0432\u044b\u0435 \u0432\u0438\u0445\u0440\u0438",741:"\u0422\u0443\u043c\u0430\u043d",751:"\u041f\u0435\u0441\u043e\u043a",761:"\u041f\u044b\u043b\u044c",762:"\u0412\u0443\u043b\u043a\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u0435\u043f\u0435\u043b",771:"\u0428\u043a\u0432\u0430\u043b",781:"\u0422\u043e\u0440\u043d\u0430\u0434\u043e",800:"\u0427\u0438\u0441\u0442\u043e\u0435 \u043d\u0435\u0431\u043e",801:"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u043b\u0430\u043a\u043e\u0432",802:"\u0420\u0430\u0441\u0441\u0435\u044f\u043d\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u043a\u0430",803:"\u0420\u0430\u0441\u0441\u0435\u044f\u043d\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u043a\u0430",804:"\u041f\u0430\u0441\u043c\u0443\u0440\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u043a\u0430"},words:{feels:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f",wind:"\u0412\u0435\u0442\u0435\u0440",humidity:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",search:"\u041f\u043e\u0438\u0441\u043a"}}};function f(e,t,a){return p[e][t][a]}function y(e){return Math.round(1.8*e+32)}function g(e){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__form"},r.a.createElement("input",{className:"search__input",type:"text",placeholder:"Enter city name",onChange:e.onChange,value:e.value}),r.a.createElement("button",{className:"button search__button",onClick:function(t){e.onClick(),t.preventDefault()}},f(e.lang,"words","search"))))}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={currentDateTime:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getCurrentDateTime",value:function(){var e=["00","01","02","03","04","05","06","07","08","09"],t=new Date,a=f(this.props.lang,"shortDayName",t.getDay()),n=t.getDate(),r=f(this.props.lang,"fullMonthName",t.getMonth()),o=t.getHours()<10?e[t.getHours()]:t.getHours(),i=t.getMinutes()<10?e[t.getMinutes()]:t.getMinutes();this.setState({currentDateTime:"".concat(a," ").concat(n," ").concat(r,"  ").concat(o,":").concat(i)})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.getCurrentDateTime()}),10)}},{key:"componentWillMount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.props,t=e.weather,a=e.isCelsius,n=a?t.weather.temp:y(t.weather.temp),o=a?t.weather.feels:y(t.weather.feels);return r.a.createElement("div",{className:"weather-day"},r.a.createElement("div",{className:"weather-day__city"},t.city.name,", ",t.city.country),r.a.createElement("div",{className:"weather-day__date-time"},this.state.currentDateTime),r.a.createElement("div",{className:"weather-day__wrapper"},r.a.createElement("div",{className:"weather-day__temp"},r.a.createElement("div",{className:"weather-day__temp-value"},n),r.a.createElement("div",{className:"weather-day__temp-deg"},"\xb0")),r.a.createElement("div",{className:"weather-day__img"},r.a.createElement("img",{src:"./images/".concat(t.weather.icon,".png"),alt:""})),r.a.createElement("ul",{className:"weather-day__more"},r.a.createElement("li",{className:"weather-day__more-item"},f(this.props.lang,"weather",t.weather.id)),r.a.createElement("li",{className:"weather-day__more-item"},f(this.props.lang,"words","feels"),": ",o," \xb0"),r.a.createElement("li",{className:"weather-day__more-item"},f(this.props.lang,"words","wind"),": ",t.weather.wind.speed," m/c"),r.a.createElement("li",{className:"weather-day__more-item"},f(this.props.lang,"words","humidity"),": ",t.weather.humidity," %"))))}}]),t}(r.a.Component),E=a(16),v=a.n(E);v.a.accessToken="pk.eyJ1IjoieXVza292c3MiLCJhIjoiY2szNnRoODJuMDR2NTNubWhmZ2tyNHcweiJ9.nqpNmNuvXFtwx0VFoqqxGQ";var C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={zoom:20},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.map=new v.a.Map({container:this.mapContainer,center:[this.props.lon,this.props.lat],style:"mapbox://styles/mapbox/streets-v9",zoom:10})}},{key:"componentDidUpdate",value:function(){this.map.setCenter([this.props.lon,this.props.lat])}},{key:"componentWillUnmount",value:function(){this.map.remove()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"},ref:function(t){return e.mapContainer=t},className:"map"})}}]),t}(r.a.Component);function b(e){var t,a;return e.isCelsius?(t="button button--selected control-panel__celsius",a="button control-panel__faringate"):(t="button control-panel__celsius",a="button button--selected control-panel__faringate"),r.a.createElement("div",{className:"control-panel"},r.a.createElement("button",{className:"button control-panel__update",onClick:e.onClickUpdate}),r.a.createElement("select",{value:e.value,onChange:e.onChange,className:"dropdown control-panel__lang"},r.a.createElement("option",{className:"dropdown__item",value:"en"},"en"),r.a.createElement("option",{className:"dropdown__item",value:"ru"},"ru")),r.a.createElement("button",{className:a,onClick:e.onClickFaringate},"\xb0 F"),r.a.createElement("button",{className:t,onClick:e.onClickCelsius},"\xb0 C"))}function _(e){var t=e.lang,a=e.forecast,n=e.isCelsius?a.temp:y(a.temp);return r.a.createElement("div",{className:"weather-forecast__day"},r.a.createElement("div",{className:"weather-forecast__weekday"},f(t,"fullDayName",a.weekDay)),r.a.createElement("div",{className:"weather-forecast__temp"},n,"\xb0"),r.a.createElement("div",{className:"weather-forecast__img"},r.a.createElement("img",{src:"./images/".concat(a.icon,".png"),alt:""})))}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchString:""},a.onSearchChange=function(e){a.setState({searchString:e.target.value})},a.onControlPanelChange=function(e){a.props.changeLang(e.target.value)},a.onSearchChange=a.onSearchChange.bind(Object(d.a)(a)),a.onClickCelsius=a.onClickCelsius.bind(Object(d.a)(a)),a.onClickFaringate=a.onClickFaringate.bind(Object(d.a)(a)),a.onControlPanelChange=a.onControlPanelChange.bind(Object(d.a)(a)),a.onClick=a.onClick.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onClickCelsius",value:function(){this.props.changeUseCelsius(!0)}},{key:"onClickFaringate",value:function(){this.props.changeUseCelsius(!1)}},{key:"onClick",value:function(){this.props.getWeather(this.state.searchString,"metric")}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.props.getWeatherCoord(t.coords.latitude,t.coords.longitude)}))}},{key:"render",value:function(){var e=this.state.searchString,t=this.props,a=t.weather,n=t.forecast,o=t.lang,i=t.isCelsius;return a.city?r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement(b,{isCelsius:i,onClickUpdate:this.onClick,onClickFaringate:this.onClickFaringate,onClickCelsius:this.onClickCelsius,onChange:this.onControlPanelChange}),r.a.createElement(g,{lang:o,value:e,onChange:this.onSearchChange,onClick:this.onClick})),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"weather"},r.a.createElement(w,{lang:o,isCelsius:i,weather:a}),r.a.createElement("div",{className:"weather-forecast"},n&&r.a.createElement(_,{lang:o,isCelsius:i,forecast:n[0]}),n&&r.a.createElement(_,{lang:o,isCelsius:i,forecast:n[1]}),n&&r.a.createElement(_,{lang:o,isCelsius:i,forecast:n[2]}))),r.a.createElement("div",{className:"mapContainer"},r.a.createElement(C,{lat:a.city.coord.lat,lon:a.city.coord.lon})))):r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement(b,{isCelsius:i,onClickUpdate:this.onClick,onClickFaringate:this.onClickFaringate,onClickCelsius:this.onClickCelsius,onChange:this.onControlPanelChange}),r.a.createElement(g,{lang:o,value:e,onChange:this.onSearchChange,onClick:this.onClick})))}}]),t}(r.a.Component),k=function(e){return{type:"GET_WEATHER_FORECAST_REQUEST",payload:e}},T=function(e){return{type:"GET_WEATHER_FORECAST_FAILTURE",payload:e}},S=function(e,t){return function(t){t(k(!0)),fetch("".concat("https://api.openweathermap.org/data/2.5/").concat("forecast","?").concat("APPID=d5ecba2b149b9cdfb1fea656c735177d","&").concat("units=metric","&").concat("id=").concat(e)).then((function(e){if(!e.ok)throw Error(e.statusText);return t(k(!1)),e})).then((function(e){return e.json()})).then((function(e){t(T(!1)),t({type:"GET_WEATHER_FORECAST_SUCCESS",payload:function(e){var t=(new Date).setUTCHours(12,0,0,0),a=[];a.push(new Date(t+864e5).getTime()),a.push(new Date(t+1728e5).getTime()),a.push(new Date(t+2592e5).getTime());var n=e.list.filter((function(e){return a.includes(1e3*e.dt)})),r={};return n.forEach((function(e,t){r[t]={weekDay:new Date(a[t]).getDay(),temp:Math.round(e.main.temp),icon:e.weather[0].icon}})),r}(e)})})).catch((function(){return t(T(!0))}))}};var j=function(e){return{type:"GET_WEATHER_REQUEST",payload:e}},N=function(e){return{type:"GET_WEATHER_SUCCESS",payload:e}},D=function(e){return{type:"GET_WEATHER_FAILTURE",payload:e}};function R(e){return{id:e.id,date:e.dt,city:{name:e.name,country:e.sys.country,coord:{lat:e.coord.lat,lon:e.coord.lon}},weather:{id:e.weather[0].id,temp:Math.round(e.main.temp),feels:Math.round(13.12+.6215*Math.round(e.main.temp)-11.37*Math.pow(e.wind.speed,.16)+.3965*Math.round(e.main.temp)*Math.pow(e.wind.speed,.16)),humidity:e.main.humidity,icon:e.weather[0].icon,wind:{deg:e.wind.deg,speed:e.wind.speed}}}}var P=Object(c.b)((function(e){var t=e.weather,a=t.weather,n=t.isRequest,r=t.isError,o=e.forecast,i=o.forecast,c=o.isRequestForecast,s=o.isErrorForecast,l=e.controlPanel;return{isRequest:n,weather:a,isError:r,forecast:i,isRequestForecast:c,isErrorForecast:s,lang:l.lang,isCelsius:l.isCelsius}}),(function(e){return{getWeather:function(t){return e(function(e){return function(t){t(j(!0)),fetch("".concat("https://api.openweathermap.org/data/2.5/").concat("weather","?").concat("APPID=d5ecba2b149b9cdfb1fea656c735177d","&").concat("units=metric","&").concat("q=").concat(e)).then((function(e){if(!e.ok)throw Error(e.statusText);return t(j(!1)),e})).then((function(e){return e.json()})).then((function(e){t(S(e.id)),t(D(!1)),t(N(R(e)))})).catch((function(){return t(D(!0))}))}}(t))},getWeatherCoord:function(t,a){return e(function(e,t){return function(a){a(j(!0)),fetch("".concat("https://api.openweathermap.org/data/2.5/").concat("weather","?").concat("APPID=d5ecba2b149b9cdfb1fea656c735177d","&").concat("units=metric","&lat=").concat(e,"&lon=").concat(t)).then((function(e){if(!e.ok)throw Error(e.statusText);return a(j(!1)),e})).then((function(e){return e.json()})).then((function(e){a(S(e.id)),a(D(!1)),a(N(R(e)))})).catch((function(){return a(D(!0))}))}}(t,a))},getWeatherForecast:function(t){return e(S(t))},changeLang:function(t){return e(function(e){return{type:"CHANGE_LANG",payload:e}}(t))},changeUseCelsius:function(t){return e(function(e){return{type:"USE_CELSIUS",payload:e}}(t))}}}))(O),F=a(3),A=a(19),z=a(8);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={weather:"",isRequest:!1,isError:!1};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G={forecast:"",isRequestForecast:!1,isErrorForecast:!1};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={lang:"en",isCelsius:"true"},J=Object(F.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER_REQUEST":return M({},e,{isRequest:t.payload});case"GET_WEATHER_FAILTURE":return M({},e,{isError:t.payload});case"GET_WEATHER_SUCCESS":return M({},e,{weather:t.payload})}return e},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER_FORECAST_REQUEST":return L({},e,{isRequestForecast:t.payload});case"GET_WEATHER_FORECAST_FAILTURE":return L({},e,{isErrorForecast:t.payload});case"GET_WEATHER_FORECAST_SUCCESS":return L({},e,{forecast:t.payload})}return e},controlPanel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANG":return q({},e,{lang:t.payload});case"USE_CELSIUS":return q({},e,{isCelsius:t.payload})}return e}});a(30);var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(F.d)(J,e,Object(F.a)(A.a))}();i.a.render(r.a.createElement(c.a,{store:Q},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.0e438825.chunk.js.map