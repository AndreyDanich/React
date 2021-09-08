import React, {useEffect} from "react";


export function AddAnswer(props) {
    const answer = 'useEffect'
    
    useEffect(() => {
        console.log('useEffect')
    }, [props.message]);
    
    
    return (
      <li className='li'>{answer}</li>
    )
}
