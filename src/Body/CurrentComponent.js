import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import MapComponent from './MapComponent';
import { getCurrentWeather, getForecastWeather } from '../apiService/weatherServices';
import { useParams } from 'react-router-dom';
import cities from '../Header/cities.json'

export default function CurrentComponent(props) {

    const [weather, setWeather] = useState(null);
    const params = useParams();

    const get = () => {
        const data = props.form || props.cookie;

        if(params.city) {
            data.city = cities.findIndex(city => city.name.toLocaleLowerCase() === params.city);
        }

        getCurrentWeather(data)
            .then((response) => {
                setWeather(response);
                console.log('response', response);
            })
            .catch((error) => {
                console.error('Error in api call', error);
            });
    }

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