import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.189),
    inset 0 0 0 60px rgba(0, 0, 0, 0.189), 0 1px rgba(46, 186, 104, 0.08);
  transition: 0.5s linear;
  &:focus,
  &:hover {
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(133, 23, 23, 0.08);
  }
`;
export const ErrorM = styled(ErrorMessage)`
  color: red;
`;

export const Btn = styled.button`
  text-align: center;
  display: flex;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 5px;
  font-size: 16px;
  text-decoration: none;
  margin: 7px;
  color: white;
  background: #7ca78c;
  box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
  transition: 0.3s;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: #8ebe9f;
    box-shadow: rgb(0 0 0 / 64%) 10px 10px 5px 0px;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: scale(1.3);
  }
`;
