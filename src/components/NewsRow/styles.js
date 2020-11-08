import styled from "styled-components";
import { SEVENTH_COLOR, FIRST_COLOR } from "constants/palette";

export const NewsImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 10;
  background-color: ${SEVENTH_COLOR};
`;

export const InfoWrapper = styled.View`
  flex: 1;
`;

export const ViewMoreButtonWrapper = styled.View`
  padding: 10px 30px;
  background-color: ${FIRST_COLOR};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
