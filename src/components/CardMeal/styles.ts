import styled, { css } from 'styled-components/native';
import { ItOnDiet } from '../../models/Diet';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  border-width: 1px;
  border-color: ${({ theme}) => theme.colors.GRAY_4};
  border-radius: 8px;
  align-items: center;
  gap: 12px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LM}px;
    color: ${theme.colors.GRAY_1};
  `}
`;

export const Line = styled.View`
  background-color: ${({theme}) => theme.colors.GRAY_4};
  height: 14px;
  width: 1px;
`;

export const NameMeal = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_2};
  `}
`;

type DietBollProps = {
  isDiet: ItOnDiet;
}

export const DietBoll = styled.View<DietBollProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isDiet }) => 
    isDiet === 'Yes' ?
      theme.colors.GREEN_MID :
      theme.colors.RED_MID };
`;
