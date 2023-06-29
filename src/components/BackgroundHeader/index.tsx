import { HeaderArrowWithName } from '../HeaderArrowWithName';
import { Container, ColorContainerStyleType, PaddingHeader } from './styles';

interface HeaderTitleProps {
  title: string;
  color?: ColorContainerStyleType;
  children: React.ReactNode;
}

export function BackgroundHeader ({ title, color = 'default', children }: HeaderTitleProps) {
  return (
    <Container color={color}>
      <PaddingHeader>
        <HeaderArrowWithName title={title} color={color} />
      </PaddingHeader>
      {children}
    </Container>
  );
}
