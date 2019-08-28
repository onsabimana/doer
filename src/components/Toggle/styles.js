import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float: right;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Span = styled.span`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  margin-left: auto;
  margin-right: auto;
`;
