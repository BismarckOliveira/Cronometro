import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
`;

export const Content = styled.div`
 overflow: auto;
 height: 250px;

table{
   width: 100%;   

   th{
     text-align: left;
     line-height: 1.5rem;    
   }

tbody{
   td {
     border-top: 0.5px solid #fff;
   }
   }
}

`;