import { ModalProps } from 'react-native';

import { Button } from '../Button';
import { ModalContent } from '../Modal';

import { Container, Title, ContainerButton } from './styles';

type ModalRemoveMealProps = ModalProps & {
  onClose: () => void;
  onConfirm: () => void;
}

export function ModalRemoveMeal({ onClose, onConfirm, ...rest }: ModalRemoveMealProps) {
  return (
    <ModalContent {...rest} onClose={onClose}>
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <ContainerButton>
          <Button
            style={{ flex: 1 }}
            text='Cancelar'
            typeColor='SECONDARY'
            activeOpacity={0.7}
            onPress={onClose}
          />
          <Button
            style={{ flex: 1 }}
            text='Sim, excluir'
            activeOpacity={0.7}
            onPress={() => {
              onClose();
              onConfirm();
            }}
          />
        </ContainerButton>
      </Container>
    </ModalContent>
  );
}
