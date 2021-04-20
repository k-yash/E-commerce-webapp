import { ToastContainer, toast } from 'react-toastify';

export const successToast = (text) =>{
    toast.success(`${text}`);
}


export const errorToast = () =>{
    toast.error('not a success!!');
}