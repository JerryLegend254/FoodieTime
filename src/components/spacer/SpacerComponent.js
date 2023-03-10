import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizeVar = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVar = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (postion, size, theme) => {
  const sizeIndx = sizeVar[size];
  const property = positionVar[postion];
  const value = theme.space[sizeIndx];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "large",
};
