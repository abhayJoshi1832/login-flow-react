import React, {useContext,useState} from 'react';
const FormContext = React.createContext();


/** Change only the below variable: defaultFormData; to add/remove fields in user login data
 * Ensure correct naming for keys - should match with field(input) name used in page 
 */

const defaultFormData ={
    fullName: '',
    displayName: '',
    workspaceName:'',
    workspaceUrl:'',
    myselfOrTeam: 'myself'
    
};

/**useFromData custom hook is called inside individual pages * 
 * Exposes formData to access field values
 * Exposes handleChange callback to set field values (see FormDataProvider below for reference) 
 */
export function useFormData() {
    return useContext(FormContext)
};

/**FormDataProvider is a wrapper; only called inside MainForm component
 * No edits needed here to add/remove fields
 */
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
