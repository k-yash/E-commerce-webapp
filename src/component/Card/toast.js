import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const successToast = (text) =>{
    return toast.success(text, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
}


export const errorToast = (text) =>{
    return toast.error(text, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
}