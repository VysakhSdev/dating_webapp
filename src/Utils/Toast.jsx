
import { Flip , toast } from "react-toastify";

export const Show_Toast = ( message,type ) => {
    if (type === true){
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,    
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition : Flip,
        });
    }
    else
    {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition : Flip,
        });       
    }
}
