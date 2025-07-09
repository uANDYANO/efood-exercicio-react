import { useSelector } from "react-redux";
import { HeroContainer, Tag, Title } from "./styles";
import { capitalize } from "../Card";
import { RootReducer } from "../../store";

const Hero = () => {
  const { restaurant } = useSelector(
    (state: RootReducer) => state.selectedRestaurant
  );

  return (
    <HeroContainer backgroundImage={restaurant?.capa ?? ""}>
      <div className="container">
        <Tag>{capitalize(restaurant?.tipo ?? "")}</Tag>
        <Title>{restaurant?.titulo}</Title>
      </div>
    </HeroContainer>
  );
};
export default Hero;
