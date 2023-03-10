import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const ListView = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const RatingOpen = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Image)`
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[3]};
`;

export const RestaurantClosingDetails = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
