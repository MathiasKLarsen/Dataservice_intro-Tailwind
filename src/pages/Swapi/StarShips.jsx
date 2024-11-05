import React, { useEffect, useState } from 'react';
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../Hooks/useRequestData";

const Starships = () => {
    const {makeRequest, isLoading, data, error} = useRequestData();

    const [page, setPage] = useState(1)

    useEffect(() => {

        makeRequest("https://swapi.dev/api/starships/?page=" + page);
    
    } , [page]) 

    

    return (
    <div className="container">
        <Title titleText="󠀠🔥🚀StarShips ๋࣭ ⭑⚝🛸๋࣭ ⭑⚝"/>

        { isLoading && <Loader /> }
        { error && <Error /> }
        
        {
            data &&
            <div className="flex justify-between px-10 mb-5">
                <button onClick={() => setPage(page - 1)}
                    disabled={ !data.previous }
                    className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'> 
                    ← Previous
                </button>

                <span className='inline-block px-4 py-2 mt-10 font-bold'>Current page: {page}</span>

                <button onClick={() => setPage(page + 1)}
                    disabled={ !data.next }
                    className='inline-block px-4 py-2 mt-10 font-bold text-white rounded disabled:bg-slate-500 bg-emerald-500'>
                    Next →
                </button>
            </div>
        }

        <div className='grid grid-cols-4'>
            {
                data &&
                data.results.map( starship =>
                    <div key={starship.name} className='p-3 border border-blue-500'>
                        <ul>
                            <li>
                                <div className='p-5 border-2 border-black'>
                                    <h2>Name: {starship.name}</h2>
                                    <p>Model: {starship.model}</p>
                                    <p>Manufacturer: {starship.manufacturer}</p>
                                </div>
                                <div className='p-5 my-2 border-2 border-black'>
                                    <p>Cost: {starship.cost_in_credits}</p>
                                    <p>Length: {starship.length}</p>
                                    <p>max atmosphering speed: {starship.max_atmosphering_speed}</p>
                                </div>
                                <div className='p-5 my-2 border-2 border-black'>
                                    <p>Crew: {starship.crew}</p>
                                    <p>Passengers: {starship.passengers}</p>
                                    <p>Cargo capacity: {starship.cargo_capacity}</p>
                                </div>
                                <div className='p-5 my-2 border-2 border-black'>
                                    <p>Consumables: {starship.consumables}</p>
                                    <p>Hyperdrive: {starship.hyperdrive_rating}</p>
                                    <p>MGLT: {starship.MGLT}</p>
                                </div>
                                <div className='p-5 border-2 border-black'>
                                    <p>Starship class: {starship.starship_class}</p>
                                    <p>Created: {starship.created}</p>
                                    <p>Edited: {starship.edited}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    </div>
  );
};

export default Starships;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Starships = () => {
//   const [starships, setStarships] = useState([]);
//   const [nextPage, setNextPage] = useState(null);
//   const [prevPage, setPrevPage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchStarships = async (url) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(url);
//       setStarships(response.data.results);
//       setNextPage(response.data.next);
//       setPrevPage(response.data.previous);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStarships('https://swapi.dev/api/starships/');
//   }, []);

//   const handleNext = () => {
//     if (nextPage) fetchStarships(nextPage);
//   };

//   const handlePrevious = () => {
//     if (prevPage) fetchStarships(prevPage);
//   };

//   if (loading) return <div className="text-xl text-center">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">Error: {error}</div>;

//   return (
//     <div className="max-w-4xl p-4 mx-auto">
//       <h1 className="mb-4 text-2xl font-bold text-center">Starships</h1>
//       <ul className="space-y-4">
//         {starships.map((starship) => (
//           <li key={starship.name} className="p-4 border rounded-lg shadow-md">
//             <strong>Name:</strong> {starship.name} <br />
//             <strong>Model:</strong> {starship.model} <br />
//             <strong>Manufacturer:</strong> {starship.manufacturer} <br />
//             <strong>Cost:</strong> {starship.cost_in_credits} <br />
//             <strong>Length:</strong> {starship.length} <br />
//             <strong>Crew:</strong> {starship.crew} <br />
//             <strong>Passengers:</strong> {starship.passengers} <br />
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-between mt-4">
//         <button 
//           onClick={handlePrevious} 
//           disabled={!prevPage} 
//           className={`px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 ${!prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           Previous
//         </button>
//         <button 
//           onClick={handleNext} 
//           disabled={!nextPage} 
//           className={`px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 ${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Starships;