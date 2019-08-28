import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 14px 24px;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
`;

export const ItemWrapper = styled.label`
`;
