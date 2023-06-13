import styled from "styled-components";
const colors = {
  purple: "#B799FF",
  white: "#ACBCFF",
  blue: "#AEE2FF",
};
const ContainerHeader = styled.div`
  width: 100%;
  color: #fff;
  height: 40px;
  background-color: #212a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #fff;
    margin: 20px;
  }
`;
export { ContainerHeader };
