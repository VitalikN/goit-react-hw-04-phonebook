import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 30px;
  background-color: rgb(141, 179, 157);
  box-shadow: -15px -15px 2px -5px rgba(123, 51, 90, 0.5),
    -15px 15px 2px -5px rgba(60, 74, 123, 0.5),
    15px -15px 2px -5px rgba(255, 0, 0, 0.5),
    15px 15px 2px -5px rgba(60, 123, 68, 0.5);
`;
export const Title = styled.h2`
  margin-bottom: 10px;
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
