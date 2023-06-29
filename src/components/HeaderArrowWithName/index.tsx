import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  IconArrowLeft,
  Touch
} from './styles';
import { ColorContainerStyleType } from '../BackgroundHeader/styles';

interface HeaderArrowWithNameProps {
  title: string;
  color?: ColorContainerStyleType;
}

export function HeaderArrowWithName ({ title, color = 'default' }: HeaderArrowWithNameProps) {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container color={color}>
      <Touch activeOpacity={0.7} onPress={handleGoBack}>
        <IconArrowLeft />
      </Touch>
      <Title>{title}</Title>
    </Container>
  );
}
