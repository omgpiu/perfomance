import { styled } from 'linaria/react';


export const Container = styled.div<{ isColumn?: boolean }>`
  display: flex;
  flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row'};
`;

export const Pane = styled.div<{ weight: number }>`
  height: 100vh;
  flex: ${({weight}) => weight};
`;
