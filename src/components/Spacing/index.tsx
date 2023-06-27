import { View } from 'react-native';

interface Props {
  height?: number;
  width?: number;
}

export function Spacing({ height = 0, width = 0 }: Props) {
  return <View style={{ height, width }} />;
}