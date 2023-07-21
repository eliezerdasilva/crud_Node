import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column; /* Corrigido "flex-directions" para "flex-direction" */
`;

const Label = styled.label``;
const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none; /* Corrigido "border;none;" para "border: none;" */
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({onEdit}) => {
  const ref = useRef();
  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label> {/* Corrigido "label" para "Label" */}
        <Input name="nome"></Input>
      </InputArea>
      <InputArea>
        <Label>E-mail</Label> {/* Corrigido "label" para "Label" */}
        <Input name="email" type="email"></Input>
      </InputArea>
      <InputArea>
        <Label>Telefone</Label> {/* Corrigido "label" para "Label" */}
        <Input name="fone"></Input>
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label> {/* Corrigido "label" para "Label" */}
        <Input name="data_nascimento" type="date"></Input>
      </InputArea>
      <Button type="submit">SALVAR</Button> {/* Corrigido "button" para "Button" */}
    </FormContainer>
  );
};

export default Form;
