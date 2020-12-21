import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;

  padding: 17px 20px;

  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};

  font-size: 1.8rem;
  font-weight: 400;
`;
