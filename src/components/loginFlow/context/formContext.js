import React, {useContext,useState} from 'react';

const FormContext = React.createContext();

export function useFormData() {
    return useContext(FormContext)
};

const defaultFormData ={
    fullName: '',
    displayName: '',
    workspaceName:'',
    workspaceUrl:'',
    myselfOrTeam: 'myself'
    
};

export function FormDataProvider({children}){
    
    const [formData, setFormData] = useState(defaultFormData);

    const handleChange= field => event  => {
        setFormData({...formData,[field]: event.target.value});
      };


    return(
        <FormContext.Provider value={{formData,handleChange}}>
            {children}
        </FormContext.Provider>
    )

}
