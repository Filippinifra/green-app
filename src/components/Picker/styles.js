import styled from "styled-components";
import { COMMON_FIFTH_COLOR } from "constants/palette";

export const PickerWrapper = styled.View`
  border-bottom-width: 1px;
  flex: 1;
  border-color: ${({ borderColor }) => borderColor || COMMON_FIFTH_COLOR};
`;
