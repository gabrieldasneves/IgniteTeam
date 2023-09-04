import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 56px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_200};
    `};
  flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-right: 4px;
  margin-left: 16px;
`;
