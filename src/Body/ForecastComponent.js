import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import MapComponent from './MapComponent';
import { getForecastWeather } from '../apiService/weatherServices';
import { Tab, Tabs } from "react-bootstrap";
import moment from 'moment';

export default function ForecastComponent(props) {

    const [days, setDays] = useState([]);
    const [weather, setWeather] = useState(null);
// от сюда и ниже перепроверить с расимом с гита 00000000000000000000000000000
    const get = () => {
        getForecastWeather(props.form || props.cookie)
            .then((response) => {
                console.log(response);
                setWeather(response);
                let oneDay = [];
                const dataByDays = [];

                for (const [index, data] of response.list.entries()) {
                    console.log(oneDay.length && moment(data.dt).day() === moment(oneDay[0].dt).day());
                    if (oneDay.length && moment(data.dt).day() === moment(oneDay[0].dt).day()) {
                        oneDay.push(data);
                    } else {
                        dataByDays.push(oneDay);
                        oneDay = [];
                    }
                    // if ((index + 1) % 8 === 0) {

                }

                setDays(dataByDays);
                console.log(dataByDays);
            })

        // что здесь ниже происходит

        setDays(response);
        console.log('response', response);
    })
            .catch ((error) => {
        console.error('Error in api call', error);
    });
}
// .........................
useEffect(() => {
    if (props.form || props.cookie) {
        get();
    }
}, [props.form || props.cookie]);

// 

return (
    <>
        <Tabs className="mb-3 mt-2">
            {days.map((day, index1) => (
                <Tab eventKey={index1} key={index1} title={"Day" + (index1 + 1)}>
                    <Tabs className="mb-3 mt-2">
                        {day.map((data, index2) => (
                            <Tab eventKey={index2} key={index2} title={data.dt_txt}>
                                <DataComponent {...props} weather={data} />
                            </Tab>
                        ))}
                    </Tabs>
                </Tab>
            ))}
        </Tabs>
        {days.length && (<MapComponent {...props} weather={weather.city} />)}
    </>
)
}