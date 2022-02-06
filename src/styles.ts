import {styled} from "linaria/react";

export const FlexWrapper = styled.div`
  display: flex;

`
export const Card = styled(FlexWrapper)`
  flex: 1;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;

  p:first-child {
    text-align: center;
  }

  p {
    padding-top: 5px;
  }
`