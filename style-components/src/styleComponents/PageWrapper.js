import styled from "styled-components";


export const PageWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px 20px;
  display:flex;
  justify-content:${props=>(props.pageNo===0?'flex-end':'space-between')}
`;