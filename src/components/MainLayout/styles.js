import styled from "styled-components";
import { COMMON_THIRD_COLOR } from "constants/palette";

export const Title = styled.Text`
  color: ${COMMON_THIRD_COLOR};
  font-size: 14px;
  font-weight: 800;
`;

export const RightBoxHeader = styled.View`
  position: absolute;
  right: 0;
  height: 25px;
  width: 25px;
  margin-right: 18px;
`;

export const FlagImage = styled.Image`
  border-color: ${COMMON_THIRD_COLOR};
  border-width: 2px;
  background-color: ${COMMON_THIRD_COLOR};
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
