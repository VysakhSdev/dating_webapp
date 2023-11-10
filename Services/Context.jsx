import { createContext, useState } from "react";

export const Context= createContext();
export const Context_Provider =({children})=>{
    const [isloggedIn,setIsloggedIn]=useState(false);

    const check_Validation = (event, fun_name, setState) => {
        const form = event.currentTarget;
        event.preventDefault();
        setState(true);
        if (form.checkValidity() === false) {
          event.stopPropagation();
          return false;
        } else {
          fun_name();
          return true;
        }
      };

return(
    <Context.Provider value={{ check_Validation, isloggedIn, setIsloggedIn }}>
    {children}
  </Context.Provider>
);
};
export default Context_Provider;