import { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackgroundHeader } from '../../components/BackgroundHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Meal } from '../../models/Meal';
import { ItOnDiet } from '../../models/Diet';

import {
  Container,
  Form,
  Label,
  Point,
  TouchPress,
  TouchText,
  ViewLabelInput,
  ViewRow
} from './styles';

export type NewMealRouteProps = {
  id: number | null;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: ItOnDiet;
}

export function NewMeal() {
  const params = useRoute().params as NewMealRouteProps;
  const { navigate } = useNavigation();

  const newNameInputRef = useRef<TextInput>(null);
  const newDescriptionInputRef = useRef<TextInput>(null);
  const newDateInputRef = useRef<TextInput>(null);
  const newHourInputRef = useRef<TextInput>(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [selectedDiet, setSelectedDiet] = useState<'Yes' | 'No' | ''>('');

  const handleSelectedDiet = useCallback((value: 'Yes' | 'No') => {
    setSelectedDiet(selectedDiet === value ? '' : value);
  }, [selectedDiet]);

  const handleChangeDate = useCallback((date: string) => {
    setDate(date);
  }, []);

  const handleChangeHour = useCallback((hour: string) => {
    setHour(hour);
  }, []);

  const handleCreateMeal = useCallback(() => {
    if(selectedDiet === '') {
      return ;
    }
    const newMeal: Meal = {
      date,
      description,
      hour,
      isDiet: selectedDiet,
      name,
    };

    console.log(newMeal);

    navigate('feedback', { itOnDiet: selectedDiet });
  }, [date, description, hour, selectedDiet, name]);

  useEffect(() => {
    if(params.id) {
      setName(params.name);
      setDescription(params.description);
      setDate(params.date);
      setHour(params.hour);
      setSelectedDiet(params.isDiet);
    }
  }, [params]);

  const titleHeader = params.id ? 'Editar refeição' : 'Refeição';

  return (
    <BackgroundHeader title={titleHeader}>
      <Container>
        <Form>
          <ViewLabelInput>
            <Label>Nome</Label>
            <Input
              inputRef={newNameInputRef}
              autoCorrect={false}
              returnKeyType='next'
              value={name}
              onChangeText={setName}
              onSubmitEditing={() => newDescriptionInputRef.current?.focus()}           
            />
          </ViewLabelInput>
          <ViewLabelInput>
            <Label>Descrição</Label>
            <Input
              inputRef={newDescriptionInputRef}
              returnKeyType='next'
              value={description}
              onChangeText={setDescription}
              onSubmitEditing={() => newDateInputRef.current?.focus()} 
            />
          </ViewLabelInput>
          <ViewRow>
            <ViewLabelInput>
              <Label>Data</Label>
              <Input
                inputRef={newDateInputRef}
                returnKeyType='next'
                value={date}
                onChangeText={handleChangeDate}
                onSubmitEditing={() => newHourInputRef.current?.focus()}
              />
            </ViewLabelInput>
            <ViewLabelInput>
              <Label>Hora</Label>
              <Input
                inputRef={newHourInputRef}
                returnKeyType='next'
                value={hour}
                onChangeText={handleChangeHour}
                onSubmitEditing={() => newHourInputRef.current?.blur()}
              />
            </ViewLabelInput>
          </ViewRow>
          <ViewLabelInput>
            <Label>Está na dieta?</Label>
            <ViewRow>
              <TouchPress
                activeOpacity={0.7}
                background={selectedDiet === 'Yes'? 'green' : 'default'}
                onPress={() => handleSelectedDiet('Yes')}
              >
                <Point background='green' />
                <TouchText>Sim</TouchText>
              </TouchPress>
              <TouchPress
                activeOpacity={0.7}
                background={selectedDiet === 'No'? 'red' : 'default'}
                onPress={() => handleSelectedDiet('No')}
              >
                <Point background='red' />
                <TouchText>Não</TouchText>
              </TouchPress>
            </ViewRow>
          </ViewLabelInput>
        </Form>
        <Button
          text='Cadastrar Refeição'
          activeOpacity={0.7}
          onPress={handleCreateMeal}
        />
      </Container>
    </BackgroundHeader>
  );
}
