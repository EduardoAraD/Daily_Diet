import styled, { css } from 'styled-components/native';
import { ItOnDiet } from '../../models/Diet';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.X}px;
    color: ${theme.colors.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_2};
  `}
  margin-bottom: 24px;
`;

export const DateHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.GRAY_1};
  `}
  margin-bottom: 8px;
`;

export const ViewDiet = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.GRAY_5};
  padding: 8px 16px;
  border-radius: 1000px;
  align-self: left;
`;

interface PointProps {
  background: ItOnDiet;
}
export const Point = styled.View<PointProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme, background }) => background === 'Yes' ?
    theme.colors.GREEN_DARK : theme.colors.RED_DARK  
};
`;

export const TextDiet = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.GRAY_1};
  `}
`;

export const ContainerButton = styled.View`
  gap: 9px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
`;
