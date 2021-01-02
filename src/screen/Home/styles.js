import styled, { css } from "styled-components";
import { COMMON_THIRD_COLOR } from "constants/palette";

export const Wrapper = styled.ScrollView`
  padding: 30px 35px;
`;

export const Square = styled.View`
  background-color: ${({ color }) => color};
  border-radius: 20px;
  padding: 20px;
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `};
`;

export const WrapperBoxesInRow = styled.View`
  flex-direction: row;
  padding-top: ${({ gridGap }) => gridGap}px;
`;

export const CentrateElement = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Tips = styled.Text`
  color: ${COMMON_THIRD_COLOR};
  font-size: 15px;
  font-weight: 600;
`;

export const BigLabel = styled.Text`
  color: ${COMMON_THIRD_COLOR};
  font-size: 30px;
  font-weight: 800;
`;

export const SubText = styled.Text`
  color: ${COMMON_THIRD_COLOR};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const PickersWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const PickerAndIconWrapper = styled.View`
  width: 33%;
  flex-direction: row;
  align-items: center;
`;
