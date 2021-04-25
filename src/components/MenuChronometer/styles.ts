import styled from 'styled-components';

interface ContentProps {
  buttonColor: 'red' | 'green';
}

const colors = {
  green: '#63b521',
  red: '#ff2926',
}

export const Container = styled.div`

 flex: 1;
 display: flex;
 align-items: center;
 justify-content: center;

`;


export const Content = styled.div<ContentProps>`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  button {
  width: 90px;
  height: 90px;
  border: 0;
  background: #fff;
  border-radius: 500px;
  font-size: 1.5rem;
  font-weight: bold;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
  
  :first-child{
  background: ${props => props.buttonColor === 'red' ? colors.red : colors.green};

  

  
}
}



`;