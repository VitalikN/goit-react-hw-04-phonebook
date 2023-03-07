import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
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
