import styled from "styled-components";
import {
  generateColumnJustifySelf
} from "./ColumnStylingService";

/**
 * Styling for the Column Component
 */
const StyledColumn = styled.div`
  align-items: center;
  justify-self: ${(props) => generateColumnJustifySelf(props)};
`

export default StyledColumn