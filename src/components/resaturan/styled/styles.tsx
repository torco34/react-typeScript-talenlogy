import styled from "styled-components";

export const Formulario = styled.div`
  background-color: #9ba4b5;
  padding: 30px;
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    width: 40%;
    border-radius: 20px;
  }
  span {
    position: relative;
    color: #999;
    left: -40px;
  }
  input::placeholder {
    color: #999;
  }
`;
export const ContainerBody = styled.div`
  ul {
    display: flex;
  }
  img {
    width: 200px;
    display: flex;
  }
  background-color: #ccc;
`;
