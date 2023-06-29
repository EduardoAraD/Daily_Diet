import { TextInput, TextInputProps } from 'react-native';

import { Container } from './styles';

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: InputProps) {
  return (
    <Container
      ref={inputRef}
      {...rest}
    />
  );
}
