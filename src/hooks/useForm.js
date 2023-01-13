import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value /* Esto se llama computar: Crea una nueva propiedad y el contenido de [objeto.propiedad] será el nombre de la propiedad */
        });

    };

    return {
        values, 
        handleInputChange,
        reset
    };
    
};