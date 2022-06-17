import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import MapComponent from './MapComponent';
import { getCurrentWeather, getForecastWeather } from '../apiService/weatherServices';
import { useParams } from 'react-router-dom';

export default function CurrentComponent(props) {

    const [weather, setWeather] = useState(null);

    // для того что-бы получить параметры вбитые в ссылку после ? использует hook useParams
    // который при наличии параметра назначает ...
    // 
    const params = useParams();

    const get = () => {
        const data = props.form || props.cookie;

        if (params.city) {
            data.city = params.city;
        }
        // getCurrentWeather возвращает нам Promis
        // что-бы обработать ответ с промиса, мы используем .then() в которую прописываем функцию callback
        // callback функция принемает как аргумент то  что мы вернули с async функции return await response.json
        // then запускается когда promise вернул позитивный ответ (resolved)
        getCurrentWeather(data)
            .then((response) => {
                setWeather(response);
                console.log('response', response);
            })
            // catch часть async функции, которая запускается при наличии ошибки во всей структуре и при (reject)
            // catch запускается если в getCurrentWeather будет ошибка и если будет .then ошибка
            .catch((error) => {
                console.error('Error in api call', error);
            });
    }
    // useEffect может следить за изменениями переменных, которые были переданы ему. это называют dependency - зависимости
    // их может быть несколько. передаём в виде массива.
    // при любых изменениях в зависимостях запускается функция внутри useEffect-a
    useEffect(() => {
        if (props.form || props.cookie) {
            get();
        }
    }, [props.form, params]);


    return (
        <>
            <DataComponent {...props} weather={weather} />
            {weather && (<MapComponent {...props} weather={weather} />)}
        </>
    )
}