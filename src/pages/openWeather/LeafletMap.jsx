import React, { useEffect, useRef } from 'react'

import L from "leaflet"
import 'leaflet/dist/leaflet.css'

const LeafletMap = () => {

    const mapContainerRef = useRef(null)

    useEffect(() => {
     
    }, [])
    
     
  return (
    <div ref={ mapContainerRef } style={{ width: '500px', height: '500px' }}>
        Kort Loades ...
    </div>
  )
}

export default LeafletMap