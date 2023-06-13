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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  img {
    width: 200px;
    border-radius: 10px;
  }
  ul {
    color: #6096b4;
    cursor: pointer;
    padding: 0;
    margin: 0;
    /* border: solid red 2px; */
  }
  li {
    color: #6096b4;
    text-decoration: none;
    list-style: none;
    padding: 10px;
  }
  li:hover {
    color: #0078aa;
  }
`;
