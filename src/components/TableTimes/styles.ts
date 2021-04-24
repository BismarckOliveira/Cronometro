import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 padding: 1rem 3rem;
`;

export const Content = styled.div`
 overflow: auto;
 height: 250px;

table{
   width: 100%;   

   th{
     padding: 1rem 0;
     text-align: left;
     line-height: 1.5rem;    
   }

tbody{
   td {
     padding: 1rem 0;
     border-top: 0.2px solid #fff;
   }
   }
}

`;