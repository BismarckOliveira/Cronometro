import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`

height: 80vh;
padding: 2.5rem 1rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  button {
  margin-top: 5rem;
  width: 8rem;
  height: 3rem;
  border: 0;
  background: var(--green-light);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
}
}

`;

export const Timer = styled.ul`
flex: 1;
display: flex;
align-items: center;

list-style: none;
margin-top: 2rem;

span{
  font-size: 9rem;
  
}

`;