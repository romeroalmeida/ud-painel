import React from 'react';

import * as S from './styles';

export default function SellerCard({name, visits, requests, total}) {
  return (
    <S.Container>
        <header>
            <img src="https://via.placeholder.com/35x35" alt ={name} title={name} />
            <p>{name}</p>
        </header>

        <S.Info>
            <p>Visitas: {visits}</p>
            <span>
                <p>Pedidos: {requests}</p>
                <S.Total>{total}</S.Total>
            </span>
        </S.Info>

    </S.Container>
  );
}
