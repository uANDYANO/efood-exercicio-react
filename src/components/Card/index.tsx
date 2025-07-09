import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Tags,
  Tag,
  ImageContainer,
  InfosContainer,
  NameContainer,
  RateContainer,
  Description,
} from "./styles";

import star from "../../assets/star.svg";
import Button from "../Button";
import { Dish, Restaurant } from "../../services/api";
import { RootReducer } from "../../store";
import { selectRestaurant } from "../../store/reducers/selectedRestaurant";
import { selectDish } from "../../store/reducers/selectedDish";
import { open } from "../../store/reducers/detailsModal";

type RestaurantCardProps = {
  listFor: "restaurant";
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Dish[];
};

type DishesCardProps = {
  listFor: "dish";
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
};

type Props = RestaurantCardProps | DishesCardProps;

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const formatNameForUrl = (name: string) =>
  name.trim().replace(/\s+/g, "-").toLowerCase();

const Card = (props: Props) => {
  const { listFor } = props;

  const { restaurant } = useSelector(
    (state: RootReducer) => state.selectedRestaurant
  );
  const dispatch = useDispatch();

  const selectRestaurantToPagePerfil = (restaurant: Restaurant) =>
    dispatch(selectRestaurant(restaurant));
  const selectDisheToDetailsModal = (dish: Dish) => dispatch(selectDish(dish));
  const openModal = () => dispatch(open());

  const getDescription = (description: string) => {
    const maxLength = 150;
    return description.length > maxLength
      ? description.slice(0, maxLength - 3) + "..."
      : description;
  };
  const renderRestaurantCard = ({
    id,
    titulo,
    capa,
    destacado,
    tipo,
    avaliacao,
    descricao,
    cardapio,
  }: RestaurantCardProps) => (
    <Container key={formatNameForUrl(titulo)} listFor={listFor}>
      <ImageContainer
        style={{ backgroundImage: `url(${capa})` }}
        listFor="restaurant"
      >
        <Tags>
          {destacado && <Tag>Destaque do Dia</Tag>}
          <Tag>{capitalize(tipo)}</Tag>
        </Tags>
      </ImageContainer>
      <InfosContainer listFor="restaurant">
        <NameContainer>
          <span>{titulo}</span>
          <RateContainer>
            <span>{avaliacao}</span>
            <img src={star} alt="classificação" />
          </RateContainer>
        </NameContainer>
        <Description listFor="restaurant">{descricao}</Description>
        <Link
          to={`/perfil/${formatNameForUrl(titulo)}`}
          onClick={() =>
            selectRestaurantToPagePerfil({
              id,
              titulo,
              destacado,
              descricao,
              tipo,
              avaliacao,
              capa,
              cardapio,
            })
          }
        >
          <Button buttonFor="restaurant" text="Saiba mais" type="link" />
        </Link>
      </InfosContainer>
    </Container>
  );

  const renderDishCard = ({
    id,
    foto,
    nome,
    descricao,
    porcao,
    preco,
  }: DishesCardProps) => (
    <Container listFor="dish" key={formatNameForUrl(nome)}>
      <ImageContainer
        style={{ backgroundImage: `url(${foto})` }}
        listFor="dish"
      />
      <InfosContainer listFor="dish">
        <NameContainer>
          <span>{nome}</span>
        </NameContainer>
        <Description listFor="dish">{getDescription(descricao)}</Description>
        <Link
          to={`/perfil/${formatNameForUrl(
            restaurant!.titulo
          )}/${formatNameForUrl(nome)}`}
          onClick={() => {
            selectDisheToDetailsModal({
              id,
              foto,
              nome,
              descricao,
              porcao,
              preco,
            });
            openModal();
          }}
        >
          <Button buttonFor="dish" text="Mais detalhes" type="link" />
        </Link>
      </InfosContainer>
    </Container>
  );

  if (listFor === "restaurant") {
    return renderRestaurantCard(props as RestaurantCardProps);
  }

  if (listFor === "dish") {
    return renderDishCard(props as DishesCardProps);
  }

  return null;
};

export default Card;
