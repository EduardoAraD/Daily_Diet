import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
`;

export const Active = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.GRAY_1,
  size: 32,
}))``;
