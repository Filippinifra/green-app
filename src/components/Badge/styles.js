import styled from "styled-components";
import { COMMON_THIRD_COLOR } from "constants/palette";

export const BadgeWrapper = styled.View`
  border-radius: 20px;
  border-width: 5px;
  border-color: ${({ color }) => color};
  background-color: ${COMMON_THIRD_COLOR};
`;

export const HeaderWrapper = styled.View`
  padding: 15px 10px;
  background-color: ${({ color }) => color};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Title = styled.Text`
  color: ${COMMON_THIRD_COLOR};
  font-weight: 600;
  font-size: 18px;
`;
