import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

import close from "../../assets/icon/close.svg";

import { ModalContent, Modal as ModalStyle } from "./styles";

import { Dish, Dish as Props } from "../../services/api";
import { RootReducer } from "../../store";
import { add, open } from "../../store/reducers/cart";

import { close as closeDetailsModal } from "../../store/reducers/detailsModal";
import { formatNameForUrl } from "../Card";

export const formatPrices = (price: number = 0) => {
  return new Intl.NumberFormat(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const Modal = ({ id, foto, preco, descricao, nome, porcao }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateTo = (to: string) => {
    navigate(to);
  };

  const { restaurant } = useSelector(
    (state: RootReducer) => state.selectedRestaurant
  );

  const { isOpen } = useSelector((state: RootReducer) => state.detailsModal);

  const openCart = () => {
    dispatch(open());
  };

  const addItem = (dish: Dish) => {
    dispatch(add(dish));
  };

  const closeModal = (url: string) => {
    dispatch(closeDetailsModal());
    navigateTo(`/perfil/${formatNameForUrl(url)}`);
  };

  if (!restaurant) return null;

  return (
    <ModalStyle className={isOpen ? "visible" : ""}>
      <div
        className="overlay"
        onClick={() => {
          closeModal(restaurant.titulo);
        }}
      />
      <ModalContent className=".container">
        <img
          src={close}
          alt="Fechar informações Detalhadas"
          onClick={() => {
            closeModal(restaurant.titulo);
          }}
        />
        <img src={foto} alt={`Imagem da ${nome}`} />
        <div>
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>Serve: {porcao}</p>
          <Button
            buttonFor="modal"
            text={`Adicionar ao carrinho - ${formatPrices(preco)}`}
            type="button"
            onClick={() => {
              addItem({ id, foto, preco, descricao, nome, porcao });
              closeModal(restaurant.titulo);
              openCart();
            }}
          />
        </div>
      </ModalContent>
    </ModalStyle>
  );
};

export default Modal;
