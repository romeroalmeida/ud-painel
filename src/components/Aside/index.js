import React from 'react';

import * as S from './styles'

import Seller from '../SellerCard'

export default function Aside() {


  const data = [
    {id: 1 ,name: "Romero Almeida", visits: 10, requests: 8, total: "R$ 3220,0" },
    {id: 2 ,name: "Romero Almeida", visits: 10, requests: 8, total: "R$ 3220,0" },
  ]

  return (
    <S.Container>
      
      <S.Logo src="https://via.placeholder.com/165x50" />

      <S.Title>Vendedores</S.Title>

      <S.Select>
        <option value="">Hoje</option>
        <option value="">Semana</option>
        <option value="">Mês</option>
      </S.Select>


      {data.map(item => (

          <Seller 
            key={item.id}
            name={item.name}
            visits={item.visits}
            requests={item.requests}
            total={item.total}
          />

      ))}

    </S.Container>
  );
}
