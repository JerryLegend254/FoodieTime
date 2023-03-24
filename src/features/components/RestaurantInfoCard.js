import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import isOpenSvg from "../../../assets/isOpenSvg";
import { Spacer } from "../../components/spacer/SpacerComponent";
import { Text } from "../../components/typography/textComponent";
import {
  ListView,
  RestaurantCard,
  Rating,
  RatingOpen,
  Icon,
  RestaurantClosingDetails,
} from "./RestaurantInfoCardStyles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address,
    isOpen = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ListView>
      <RestaurantCard>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Text variant="label">{name}</Text>
          <RatingOpen>
            <Rating>
              {ratingArray.map((s, index) => (
                <SvgXml key={index} xml={star} width={20} height={16} />
              ))}
            </Rating>
            <RestaurantClosingDetails>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
              <Spacer position="left" size="medium">
                {isOpen && <SvgXml xml={isOpenSvg} width={20} height={16} />}
              </Spacer>
            </RestaurantClosingDetails>
          </RatingOpen>
          <Text variant="label">{address}</Text>
        </Card.Content>
      </RestaurantCard>
    </ListView>
  );
};

export default RestaurantInfoCard;
