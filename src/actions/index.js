import axios from '../axios';
import { SIGN_IN , RESET, CREATE} from '../types';



//provjera da li postoji user
export const isLogged = (postData) => async (dispatch) => {
   try {
    const dataLog = await axios.post('/api/users/valid',postData);
    
    if (dataLog.data) dispatch({type: SIGN_IN, payload:true});
    else{dispatch({type: SIGN_IN, payload:false});}
    
    } catch (error) {
       console.log(error);
   }
}

//kreiranje novog user
export const createUser = (postData) => async (dispatch) => {
    
    try {
        const dataReg = await axios.post('/api/users/',postData);
        dataReg.data.newUser = true;
        dispatch({type: CREATE, payload: dataReg.data})
    } catch (error) {
        console.log(error);
    }
 }
 
//praznjenje state
export const reset =()=>{
    
    return({
        type: RESET
    }      
    )
}