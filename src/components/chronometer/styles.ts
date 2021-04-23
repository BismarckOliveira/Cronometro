import styled from "styled-components";

export const Container = styled.div``;


interface ContentProps{
  buttonColor: 'red' | 'green';
}

const colors = {
  green: '#ccf6ef',
  red:  '#ff2926',
}

export const Content = styled.div`

height: 80vh;
padding: 2.5rem 1rem;
max-width: 800px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const MenuChronometer = styled.div<ContentProps>`

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
  
  :first-child{
  background: ${props => props.buttonColor === 'red' ? colors.red : colors.green};

  

  &:hover{
    filter: brightness(0.9);
  }
}
}

`;

export const Timer = styled.ul`
flex: 1;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;


list-style: none;


span{
  font-size: 5rem;
  
}

`;