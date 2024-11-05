// fetch()
// axios 
import axios from 'axios';
import { useState } from 'react';

const useRequestData = () => {

    // usestate = opbevaring af data
    
    // loader = venter på svar
    const [isLoading, setIsLoading] = useState(false)// true eller false
    
    // succes = data
    const [data, setData] = useState(null) // data enten {} eller []
    
    // error = ingen data
    const [error, setError] = useState(false)

    // function: ring op api'et - modtager en url (fx til swapi)
    const makeRequest = async ( url, method = "GET", headers = null, params = null ) => {
        
        let response;

        setIsLoading(true)// der loads = vener på data/svar

        await new Promise(resolve => setTimeout(resolve, 1500))// 1.5 sekunder forsinkelse

        try {
            if (method === "GET") {

                response = await axios.get( url, {headers: headers, params: params} )
            }
            else {
                throw new Error("Forkert method - indtil videre er kun GET accepteret")
            }

            setData(response.data)
            setError(false)

        } catch (error) {

            setError(true)
            setData(null)
            console.log(error)

        } finally {

            setIsLoading(false)

        }
    }

    return{makeRequest, isLoading, data, error}

}

export default useRequestData
