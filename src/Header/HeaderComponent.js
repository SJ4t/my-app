import React from 'react';
import NavComponent from './NavComponent';
import FormComponent from './FormComponent';

//Функциональный компонент. все компоненты должны называться с заглавной буквы, что бы JSX не путал его с html.
//компоненты в реакте, тоже самое что и функции в яваскрипте
//компонент принимает аргументы, которые называются propirties
// все properties хранятся в переменной 'props'
// у компонента могут быть properties по умолчанию
//Properties нельзя изменить в компоненте
// JSX
export default function HeaderComponent(props) {
    // ... это называют spreading v javaskript'e
    // spreading смотрит все значения в объекте и передаёт по отдельности.
    //props = { name: 'Rasim', surname: 'Mahtijev" } = spreading = 
    // <FormComponent name="Rasim" surname="Mahtijev" 
    return (
        <>
            <NavComponent />
            <FormComponent {...props} />
        </>
    )
}

//Properties по умолчанию
//Properties по умолчанию передаются как object
//Properties = характеристики
//характеристики используются только в том случае если при использовании небыли переданы poperties через атрибуты 
HeaderComponent.defaultProps = {
    firstName: "Anfrej",
    lastName: "Mehtijev",
  }
