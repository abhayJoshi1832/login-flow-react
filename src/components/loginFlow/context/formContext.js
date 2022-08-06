import React, {useContext,useState} from 'react';

const FormContext = React.createContext();

export function useFormData() {
    return useContext(FormContext)
};

export function FormDataProvider({children}){
    
    const [formData, setFormData] = useState({});

    return(
        <FormContext.Provider value={{formData,setFormData}}>
            {children}
        </FormContext.Provider>
    )

}
