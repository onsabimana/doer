import styled from 'styled-components';

import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;

  ${tablet} {
    width: 96%;
  }
`;
