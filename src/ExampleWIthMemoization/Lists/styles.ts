import { styled } from "linaria/react";

export const CarContainer = styled.div`
  margin: 10px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 10px;
`
export const CarsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px 30px;
  text-align: center;
  p{
    margin-top: 30px;
  }
`