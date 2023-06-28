import { Card, ColorCardStyleProps, SubTitle, Title } from './styles';

interface Props {
  title: string;
  subtitle: string;
  colorCard?: ColorCardStyleProps
}

export function CardTitleSubtitle({ subtitle, title, colorCard = 'default'}: Props) {
  return (
    <Card color={colorCard}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Card>
  );
}
