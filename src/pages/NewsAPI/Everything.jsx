import { useEffect, useState } from 'react'
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Everything = () => {

    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {

      makeRequest("https://newsapi.org/v2/everything?q=tennis&apiKey=37780ac20a79446cbbcae0a04175d26e&page=1&sortBy=popularity")

    }, [])

    return (
        <div>Everything</div>
    )
}

export default Everything