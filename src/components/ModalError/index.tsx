import { ModalProps } from 'react-native';

import { Button } from '../Button';
import { ModalContent } from '../Modal';

import { Container, Title, SubTitle, Icon } from './styles';

type ModalErrorMealProps = ModalProps & {
  onClose: () => void;
  title: string;
  subtitle: string;
}

export function ModalError({ onClose, subtitle, title, ...rest }: ModalErrorMealProps) {
  return (
    <ModalContent {...rest} onClose={onClose}>
      <Container>
        <Icon />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Button
          text='Continuar'
          typeColor='SECONDARY'
          activeOpacity={0.7}
          onPress={onClose}
        />
      </Container>
    </ModalContent>
  );
}
