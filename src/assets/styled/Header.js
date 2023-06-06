import styled from "styled-components";
const colors = {
  purple: "#B799FF",
  white: "#ACBCFF",
  blue: "#AEE2FF",
};
const ContainerHeader = styled.div`
  width: 100%;
  color: #fff;
  background-color: #b799ff;
  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: #fff;
  }
`;
export { ContainerHeader };
