import styled from "styled-components";


export const Area = styled.div`
   margin-top: 80px;
   background: #E8E8E8;
   position: absolute;
   width: 100%;
`;

export const MoviesArea = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 100px;


`;

export const AreaImage = styled.div`
    width: 260px;
    height: 349px;
    left: 663px;
    top: 519px;
     background: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    font-size: large;
    font-weight: bold;
`;

export const MoviesImg = styled.img`
      width: 260px;
      height: 260px;
      border-radius: 8px;
`;