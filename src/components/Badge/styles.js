import styled from "styled-components";
import { FIFTH_COLOR } from "constants/palette";

export const BadgeWrapper = styled.View`
  border-radius: 20px;
  border-width: 5px;
  border-color: ${({ color }) => color};
  background-color: ${FIFTH_COLOR};
`;

export const HeaderWrapper = styled.View`
  padding: 15px 10px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  color: ${FIFTH_COLOR};
  font-weight: 600;
  font-size: 18px;
`;
