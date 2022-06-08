import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstap';
import cities from './cities.json';
import dataTypes from './type.json'

export default function FormComponent() {

    // const [selectedCity, setSelectedCity] = useState({});
    // function handleOnClick(event) {
    //     setSelectedCity(sity);
    //     event.prevent.Default();
    //     const
    // }

    return (
     <Container>
        <Form onSubmit={props.handleOnSubmitForm}>
            <Form onSubmit={props.handleOnSubmitForm}>
            {dataTypes.map( dtype =>
                <Form.Check
                key={dtype.value}
                type="checkbox"
                name="dataType"
                defaultChecked=""
                label={dtype.label}
                value={dtype.value}
                />
)}
      
      FormComponent.defaultProps = {
          selectedCity: cities.find(city => city.name === 'Tallinn'),
          language: "en",
          dataType: dataTypes.find(type => type.label === 'Daily'),
          units: "",
      }
            



            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="unit">
            <Form.Label>Coose city</Form.Label>

   </Form.Select>
        </Form.Group>
        <Form.Group controlId="unit">
            <Form.Label>Coose unit</Form.Label>
            {('standart', )}

}