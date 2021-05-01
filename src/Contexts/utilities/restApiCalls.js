import axios from "axios";
const BackendApi = "https://podkart.yash2018.repl.co";
export const restApiCalls = async(method, route, data) =>{
    switch (method) {
        case GET:
            try{
                const res = axios.get(`${BackendApi}/${route}`);
            }catch(error){

            }
            

            
            break;
    
        default:
            break;
    }
}