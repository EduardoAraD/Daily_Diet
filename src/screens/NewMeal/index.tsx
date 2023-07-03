import { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackgroundHeader } from '../../components/BackgroundHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Meal } from '../../models/Meal';
import { ItOnDiet } from '../../models/Diet';

import { createMeal } from '../../storage/Meal/createMeal';

import { maskDate, maskTime } from '../../utils/mask';

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
import { editMealByRef } from '../../storage/Meal/editMealByRef';
import { ModalError } from '../../components/ModalError';

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

  const [isShowModalErrorEdit, setIsShowModalErrorEdit] = useState(false);
  const [isShowModalErrorCreate, setIsShowModalErrorCreate] = useState(false);

  const handleSelectedDiet = useCallback((value: 'Yes' | 'No') => {
    setSelectedDiet(selectedDiet === value ? '' : value);
  }, [selectedDiet]);

  const handleChangeDate = useCallback((date: string) => {
    setDate(maskDate(date));
  }, []);

  const handleChangeHour = useCallback((hour: string) => {
    setHour(maskTime(hour));
  }, []);

  const handleCreateMeal = useCallback(async () => {
    try {
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

      await createMeal(newMeal);

      navigate('feedback', { itOnDiet: selectedDiet });
    } catch (error) {
      console.log(error);
      setIsShowModalErrorCreate(true);
    }
  }, [date, description, hour, selectedDiet, name]);

  const handleEditMeal = useCallback(async () => {
    try {
      if(selectedDiet === '') {
        return ;
      }
      if(!params.id) {
        return ;
      }
  
      const newMeal: Meal = {
        date,
        description,
        hour,
        isDiet: selectedDiet,
        name,
      };
  
      await editMealByRef( params.id, newMeal);
  
      navigate('feedback', { itOnDiet: selectedDiet }); 
    } catch (error) {
      console.log(error);
      setIsShowModalErrorEdit(true);
    }
  }, [params.id, date, description, hour, selectedDiet, name]);

  const handleCreateOrEdit = useCallback(() => {
    if(params.id) {
      handleEditMeal();
    } else {
      handleCreateMeal();
    }
  }, [handleEditMeal, handleCreateMeal]);

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
  const textButton = params.id ? 'Salvar alterações' : 'Cadastrar refeição';

  return (
    <BackgroundHeader title={titleHeader}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'space-between'
            }}
          >
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
                    keyboardType='numeric'
                    placeholder='DD/MM/YYYY'
                    maxLength={10}
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
                    placeholder='HH:mm'
                    maxLength={5}
                    keyboardType='number-pad'
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
              // style={{ marginTop: 40 }}
              text={textButton}
              activeOpacity={0.7}
              onPress={handleCreateOrEdit}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ModalError
        visible={isShowModalErrorEdit}
        onClose={() => setIsShowModalErrorEdit(false)}
        title='Editar'
        subtitle='Não foi possível editar os dados de refeição.'
        transparent
      />
      <ModalError
        visible={isShowModalErrorCreate}
        onClose={() => setIsShowModalErrorCreate(false)}
        title='Criar'
        subtitle='Não foi possível criar uma refeição.'
        transparent
      />
    </BackgroundHeader>
  );
}
