import React from 'react'
import axios from "axios"

const Test = () => {
    const fetchData=()=>{

        // Make a request for a user with a given ID
        axios.get('https://randomuser.me/api')
        .then((response)=> {
            // handle success
            console.log(response);
        })
        .catch( (error)=> {
            // handle error
            console.log(error);
        }) 
    }
  return (
    <div>Test
        <button onClick={fetchData}>FetchData</button>
    </div>
  )
}

export default Test