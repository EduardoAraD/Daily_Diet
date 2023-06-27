import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 37px;
`;

export const BorderAvatar = styled.View`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Avatar = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 19px;
`;
