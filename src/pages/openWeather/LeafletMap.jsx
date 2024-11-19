import React, { useEffect, useRef } from 'react'

import L from "leaflet"
import 'leaflet/dist/leaflet.css'

const LeafletMap = ({ lat, lon, zoom }) => {

    // referencer
    const refMapContainer = useRef()    // div container med map i
    const refMap = useRef()             // selve leaflet map'et
    const refMarker = useRef()          // markør

    // useEffect - når component er klar - indlæs map
    useEffect(() => {

      if ( !refMap.current ) { 

        // var map = L.map('map').setView([51.505, -0.09], 13);
        refMap.current = L.map( refMapContainer.current ).setView([ lat, lon ], zoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo( refMap.current );

        // markør - var marker = L.marker([51.5, -0.09]).addTo(map);
        refMarker.current = L.marker([ lat, lon ]).addTo( refMap.current );
      } else {
        refMap.current.setView([ lat, lon ], zoom)
        refMarker.current.setLatLng([ lat, lon ])
      }

    }, [ lat, lon, zoom ])
    
     
  return (
    <div ref={ refMapContainer } style={{ width: '500px', height: '500px' }}>
        Kort Loades ...
    </div>
  )
}

export default LeafletMap