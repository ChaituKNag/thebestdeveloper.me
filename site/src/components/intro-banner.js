import styled from "styled-components"

export default styled.div`
  font-size: 3.5rem;
  line-height: 140%;
  font-family: "Merriweather";
  background-color: #fbda61;
  background-image: -webkit-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  background-image: -moz-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  background-image: -o-linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);

  color: white;
  text-align: right;
  border-radius: 5px;
  margin: 20px 0;
  padding: 100px 100px 100px 200px;

  @media (max-width: 768px) {
    padding: 50px 20px 50px 50px;
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    padding: 20px;
    text-align: center;
    font-size: 2rem;
  }
`
