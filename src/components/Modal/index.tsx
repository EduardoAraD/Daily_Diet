import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { Container } from './styles';

type ModalContentProps = ModalProps & {
  children: React.ReactNode;
  onClose: () => void;
}

export function ModalContent({ children, onClose, ...rest }: ModalContentProps) {
  return (
    <Modal {...rest}>
      <Container
        onPress={onClose}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          {children}
        </TouchableWithoutFeedback>
      </Container>
    </Modal>
  );
}
