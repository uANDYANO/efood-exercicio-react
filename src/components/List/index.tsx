import { Container } from "./styles";
import Card from "../Card";
import Modal from "../Modal";
import { Restaurant } from "../../services/api";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

type Props = {
  listFor: "restaurant" | "dish";
  restaurants: Restaurant[];
};

const List = ({ listFor, restaurants }: Props) => {
  const { restaurant } = useSelector(
    (state: RootReducer) => state.selectedRestaurant
  );
  const { dish } = useSelector((state: RootReducer) => state.selectedDish);

  return (
    <div className="container">
      <Container list={listFor}>
        {listFor === "restaurant" &&
          restaurants.map((restaurant) => (
            <Card
              listFor={listFor}
              key={restaurant.id}
              id={restaurant.id}
              titulo={restaurant.titulo}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
              cardapio={restaurant.cardapio}
            />
          ))}

        {listFor === "dish" &&
          restaurant?.cardapio.map((dishe) => (
            <Card
              listFor={listFor}
              key={dishe.id}
              id={dishe.id}
              foto={dishe.foto}
              nome={dishe.nome}
              descricao={dishe.descricao}
              porcao={dishe.porcao}
              preco={dishe.preco}
            />
          ))}
      </Container>

      {dish && (
        <Modal
          id={dish.id}
          foto={dish.foto}
          nome={dish.nome}
          descricao={dish.descricao}
          preco={dish.preco}
          porcao={dish.porcao}
        />
      )}
    </div>
  );
};

export default List;
