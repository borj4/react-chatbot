import React, { useEffect, useState } from 'react';

const Response = ({value}) => {

    const [response, setResponse] = useState(value)
    const [write, setWrite] = useState('')


    useEffect(()=>{

        setWrite(response)
    },[response])


    return <h5 className='response'> {write} </h5>

}
export default Response