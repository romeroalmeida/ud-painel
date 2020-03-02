import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import * as S from './styles';

export default function Map() {

  const MapToken = 'pk.eyJ1Ijoicm9tZXJvYWxtZWlkYSIsImEiOiJjazdhaDA3djQxNDBqM2xwamhpNXNkd2NmIn0.jMvvDmVMm2BS8x4GbQ9gmA'

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: -22.551985,
    longitude: -44.1692317,
    zoom: 14
  });

  const data = [
    {id: 1, latitude: -22.551985, longitude: -44.1692317},
    {id: 2, latitude: -22.535997, longitude: -44.1735377},
    {id: 3, latitude: -22.5375033, longitude: -44.1722395}
  ]

  return (
    <S.Container>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MapToken}
      >

        {data.map(item => (
          <Marker
            key={item.id}
            latitude={item.latitude} 
            longitude={item.longitude}
            offsetLeft={-20} 
            offsetTop={-10}
            >
            <S.Item />
          </Marker>
        ))}

      </ReactMapGL>
    </S.Container>
  );
}
