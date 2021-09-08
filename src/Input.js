import React, { useState, useEffect} from 'react';
import Arrow from './icon-arrow.svg';


function Input(props){
    const [new_ip, setNewIp] = useState('');
    const [requestClicked, setRequest] = useState(false);

    const handleChange = (event) => {
        setNewIp(event.target.value);
    }
    
    useEffect(() => {
        if(requestClicked) {
            props.clearCodinates();
            props.funcAPI(new_ip);
        }
        setRequest(false);
    }, [requestClicked])

    const handleClick = () => {
        let pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
        if(new_ip.match(pattern)){
            setRequest(!requestClicked);
        } else {
            alert("Please enter a valid IP Address (xxx.xxx.xxx)");
        }
    }

    return (
        <div className="pb-10 pt-5 m-auto lg:w-full lg:flex lg:flex-row ">
            <input minLength="7" maxLength="15" size="15"  type="text" onChange={handleChange} className="invalid:bg-red-600 rounded-bl-xl rounded-tl-xl p-3.5 lg:pl-10 lg:pr-10 lg:pb-3 lg:pt-4 lg:w-5/12 lg:ml-auto" placeholder={props.client_ip} value={new_ip} />
            <button onClick={handleClick} className="bg-black p-5 rounded-br-xl rounded-tr-xl lg:mr-auto"><img src={Arrow}/></button>
        </div>
    )
}


export default Input;