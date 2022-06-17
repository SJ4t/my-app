import { weather_api_key, weather_api_url } from "../keys";
import cities from '../Header/cities.json';

// запрос на сервер на endpoint: weather который отвечает на текущую погоду.
// асинхронная функция  async function выполняется отдельно от всего. она предназначена для того что бы весь код продолжал обрабатываться не ожидая ответа от сервера.
// главные ключи в А.Ф. это  async и await.
// async пишется перед обозначением функции для того что бы обозначить что это за функция JS движку.
//await пишется непосредственно перед функции которая будет выполнять запрос.
export async function getCurrentWeather(data) {
    // fetch делает запрос, которые бывают двух типов: GET и POST.
    // fetch функция применяет разные параметры. он может принимать как string так и object.
    // а если объект то это уже зависит от настроек которые мы зададим.

    // URLSearchParams - класс который нам помогает работать с параметрами которые будут переданны в fetch
    //URLSearchParams - делает из объекта string с url форматом. ссылка
    // URLSearchParams - данный объект выдаст: "lat=54.33&unit....."

    // итого получается что fetch выдаёт следующий string: http://api.openweather..... 
    const response = await fetch(weather_api_url + '/weather?' + new URLSearchParams({
        lat: cities[data.city].lat,
        lon: cities[data.city].lng,
        units: data.unit,
        lang: data.language,
        appid: weather_api_key
    }));
    // дожидаемся ответа от сервера и всё парсим в object
    // .json() = JSON.parse(js_string);
    return await response.json();
}

export async function getForecastWeather(data) {
    const response = await fetch(weather_api_url + '/forecast?' + new URLSearchParams({
        lat: cities[data.city].lat,
        lon: cities[data.city].lng,
        units: data.unit,
        lang: data.language,
        appid: weather_api_key
    }));

    return await response.json();
}