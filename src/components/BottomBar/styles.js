import styled from "styled-components";
import { COMMON_SECOND_COLOR } from "constants/palette";

export const WrapperBottomBar = styled.View`
  position: absolute;
  padding-bottom: ${({ botHeaderHeight }) => botHeaderHeight}px;
  bottom: 0px;
  height: ${({ height }) => height}px;
  background-color: ${COMMON_SECOND_COLOR};
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ItemContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const TextItem = styled.Text`
  font-size: 8px;
  color: ${({ colorText }) => colorText};
  margin-top: 3px;
`;
