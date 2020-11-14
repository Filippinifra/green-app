import styled from "styled-components";

export const BadgeWrapper = styled.View`
  border-radius: 20px;
  border-width: 5px;
  border-color: ${({ color }) => color};
`;

export const HeaderWrapper = styled.View`
  padding: 15px 10px;
  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;
