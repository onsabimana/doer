import styled from 'styled-components';

export const Label = styled.label`
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  float: right;
`;

export const Span = styled.span`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  margin-left: auto;
  margin-right: auto;
`;
