import styled from 'styled-components';

export const Container = styled.header`
 background: var(--green);

`;

export const Content = styled.div`
width: 100%;
max-width: 1000px;
margin: 0 auto;
padding: 1rem 2rem;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;


img {
  width: 50px;
  height: 50px;
}

strong{
  font-size: 2rem;
  color: var(--text-title);
}
`;