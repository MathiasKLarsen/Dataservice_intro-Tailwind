import React, { useEffect, useState } from 'react'

import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Title from '../../components/Title'

import useRequestData from "../../Hooks/useRequestData";
import { FaEdit, FaTrash } from 'react-icons/fa';

const PBGamingAdmin = () => {

    const { makeRequest, isLoading, data, error } = useRequestData();
    const { makeRequest:makeReqeustDelete, isLoading:isLoadingDelete, data:dataDelete, error:errorDelete } = useRequestData();

    useEffect(() => {
 
        makeRequest("http://127.0.0.1:8090/api/collections/gaming/records");
     
      }, [dataDelete])

      const handleDelete = ( id, title ) => {

        if (window.confirm(`Er du sikker på du vil slette: ${title}`)) {

            makeReqeustDelete(`http://127.0.0.1:8090/api/collections/gaming/records/${id}`, "DELETE")}
      }

  return (
    <section>

        <Title titleText="Administrer Gaming"/>

        { isLoading && <Loader /> }
        { error && <Error /> }

        { data &&
            <table className='table w-11/12 mx-auto text-left border-4 border-slate-950 bg-slate-400'>
                <thead>
                    <tr>
                        <th className='py-1 pl-10 text-white bg-slate-700'>TITLE</th>
                        <th className='text-white bg-slate-700'>BESKRIVELSE</th>
                        <th className='text-white bg-slate-700'>RET</th>
                        <th className='text-white bg-slate-700'>SLET</th>
                    </tr>
                </thead>
                <tbody>
                    { data.items.map( t => 
                        <tr key={t.id} className='border-2 odd:bg-slate-300 [&_td]:border-2'>
                            <td className='py-1 pl-5'>{t.title}</td>
                            <td className='w-[750px]'>{t.description}</td>
                            <td className='pl-2'>
                                <FaEdit className='text-green-400 cursor-pointer'/>
                            </td>
                            <td className='pl-2'>
                                <FaTrash className='text-red-500 cursor-pointer'
                                    onClick={() => handleDelete(t.id)}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        }

        

    </section>      
  )
}

export default PBGamingAdmin