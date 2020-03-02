import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: solid 1px #DFDFDF;
    margin-bottom: 20px;
  header{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img{
          border-radius: 50%;
          box-shadow:  0 3px 6px rgba(0, 0, 0, 0.16);
          border: solid 2px #fff;
          margin-right: 10px;
          width: 35px;
          height: 35px;
      }
      p{
          font-size: 16px;
          color: #7B7B7B;
          font-weight: 700;
      }
  }
`;
export const Info = styled.div`
    p{
        line-height: 24px;
        font-size: 14px;
        color: #7D7D7D;
    }
    span{
        display: flex;
        justify-content: space-between;
    }
`
export const Total = styled.big`
    font-size: 16px;
    font-weight: 600;
    color: #279750;
`
