import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import List from "../../components/List";
import { useGetRestaurantsQuery } from "../../services/api";

const Perfil = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Header headerFor="perfil" />
        <Hero />
        <List listFor="dish" restaurants={restaurants} />
        <Cart />
      </>
    );
  }

  return <h4>Carregando...</h4>;
};

export default Perfil;
