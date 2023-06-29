import { useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { BackgroundHeader } from '../../components/BackgroundHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

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
import { Meal } from '../../models/Meal';

export function NewMeal() {

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
    setHour(date);
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
  }, [date, description, hour, selectedDiet, name]);

  return (
    <BackgroundHeader title='Refeição'>
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
