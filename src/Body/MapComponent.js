import React from "react";
import { Container } from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import HeaderComponent from "../Header/HeaderComponent";
import { google_api_key } from ./ src / keys.js
import cities from '../Header/Cities.json';

export default function MapComponent(props) {
    cconsole.log(props.form);
    const { isolated } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey
    })

    return (
        <Container className="mt-3">
            {isolated ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={cities[(props.cookie || {}).city || props.form.city]}
                    zoom={10}
                >
                </GoogleMap>
            ) : <></>}
        </Container>
    )
}