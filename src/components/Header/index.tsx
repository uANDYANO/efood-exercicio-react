import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { Container, HeaderBar, Title } from "./styles";
import { RootReducer } from "../../store";
import { Dish } from "../../services/api";
import { open } from "../../store/reducers/cart";
import { formatNameForUrl } from "../Card";

type Props = {
  headerFor: "home" | "perfil";
};

const Header = ({ headerFor }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);
  const { restaurant } = useSelector(
    (state: RootReducer) => state.selectedRestaurant
  );

  const navigateTo = (to: string) => {
    navigate(to);
  };

  const openCart = (url: string) => {
    dispatch(open());
    navigateTo(`/perfil/${formatNameForUrl(url)}`);
  };

  const message = (array: Dish[]) => {
    let cartMessage = "";
    if (array.length === 0) {
      cartMessage = "Nenhum item no carrinho";
    } else if (array.length === 1) {
      cartMessage = "1 produto no carrinho";
    } else {
      cartMessage = `${array.length} produtos no carrinho`;
    }

    return cartMessage;
  };

  return (
    <Container>
      <div className="container">
        {headerFor === "home" ? (
          <>
            <Link to={"/"}>
              <img src={logo} alt="Efood" />
            </Link>
            <Title>
              Viva experiências gastronômicas no conforto da sua casa
            </Title>
          </>
        ) : (
          <HeaderBar>
            <p onClick={() => navigate("/")}>Restaurantes</p>
            <Link to={"/"}>
              <img src={logo} alt="Efood" />
            </Link>
            <p onClick={() => openCart(restaurant!.titulo)}>
              <span>{message(items)}</span>
            </p>
          </HeaderBar>
        )}
      </div>
    </Container>
  );
};

export default Header;
