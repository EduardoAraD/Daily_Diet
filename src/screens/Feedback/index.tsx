import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

import { Button } from '../../components/Button';
import { ItOnDiet } from '../../models/Diet';

import { Container, SubTitle, Title, Image, SubTitleBold } from './styles';
import offDietPNG from '../../assets/imageOffDiet.png';
import onDietPNG from '../../assets/imageOnDiet.png';

export type FeedbackRouteParams = {
  itOnDiet: ItOnDiet;
}

export function Feedback() {
  const { navigate } = useNavigation();
  const { itOnDiet } = useRoute().params as FeedbackRouteParams;

  const titleText = itOnDiet === 'Yes' ? 'Continue assim!' : 'Que pena!';

  const handleGoHome = useCallback(() => {
    navigate('home');
  }, []);

  const renderSubTitle = () => {
    if(itOnDiet === 'Yes') {
      return (
        <SubTitle>Você continua <SubTitleBold>dentro da dieta</SubTitleBold>. Muito bem!</SubTitle>
      );
    } else {
      return (
        <SubTitle>Você <SubTitleBold>saiu da dieta</SubTitleBold> dessa vez, mas continue se esforçando e não desista!</SubTitle>
      );
    }
  };

  return (
    <Container>
      <Title itOnDiet={itOnDiet}>{titleText}</Title>
      {renderSubTitle()}
      <Image
        source={itOnDiet === 'Yes' ? onDietPNG : offDietPNG}
        resizeMode='contain'
      />
      <Button
        text='Ir para a página inicial'
        activeOpacity={0.7}
        onPress={handleGoHome}
      />
    </Container>
  );
}
