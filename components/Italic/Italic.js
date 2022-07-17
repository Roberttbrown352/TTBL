import styled from "styled-components";

const Italic = styled.p`
  font-style: ${props => props.theme.style.italic.fontStyle};
  color: ${props => props.theme.color.italic.color};
  background-color: ${props => props.theme.color.italic.backgroundColor};
`

export default Italic
