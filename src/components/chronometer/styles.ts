import styled from "styled-components";




export const Container = styled.div`
flex: 1;
background: black;
margin-top: 2rem;
padding: 2rem;
border-radius: 0.25rem;



`;

export const Content = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 width: 250px;
 position: relative;
`;

export const Power = styled.div`

@keyframes power {
    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

 position:absolute;
 top: 0;
 right: 0;
 color: #e50b0b;
 opacity: 0.5;
 animation-name: power;
 animation-duration: 0.5s;
 animation-iteration-count: infinite;

`;

export const Time = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
gap: 0.25rem;
font-size: 3rem;


span{
  
  background:#4d0000;
  width: 100%;
  color: #ff0000;
  text-shadow: 0 0 0.4vw #e50b0b;
  font-family: 'Orbitron';
 
} 

p{
  color: #ff0000;
  text-shadow: 0 0 0.4vw #e50b0b;
}`;

export const Date = styled.div`
font-family: 'Orbitron';
display: flex;
gap: 1rem;
align-items:center;
justify-content: center;

div{ 
  display: flex;
  align-items:flex-end;
  gap: 0.25rem;
  
 
  span{
    
    font-size: 1.5rem;
    background:#4d0000;
    color: #ff0000;

  }
}
`;
