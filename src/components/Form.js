import {Redirect} from 'react-router-dom';
import { useState  } from 'react';
import { reset } from '../actions/index'; 

import { useSelector, useDispatch } from 'react-redux';




const Form = ()=>{
    const [iLog, setiLog] = useState(true);
    const dispatch = useDispatch();
    const selectData = useSelector(stat => stat.categoryRed);

   
    const handleButton =()=>{
        setiLog(false);
        dispatch(reset());
    }
    if (!iLog){
        return <Redirect to="/" />
    }  

    return(
        
        <form>
            <h1>Category Page</h1>
            <ul>
                {selectData.rootKategorija.content}
                <ul>
                    <li>
                    {selectData.podKategorija1.content}
                        <ul>
                            <li>
                            {selectData.podKategorija1.content}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                    {selectData.podKategorija2.content}
                    </li>
                </ul>
            </ul>
            <button onClick={handleButton}>Logout</button>
        </form>
    );
}
export default Form;