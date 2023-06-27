import logo from '../../assets/logo.png';
import { Container, Avatar, Logo, BorderAvatar } from './styles';

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <BorderAvatar>
        <Avatar source={{ uri: 'https://github.com/EduardoAraD.png' }} />
      </BorderAvatar>
    </Container>
  );
}
