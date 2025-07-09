import Header from "../../components/Header";
import List from "../../components/List";

import { useGetRestaurantsQuery } from "../../services/api";

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Header headerFor="home" />
        <List listFor="restaurant" restaurants={restaurants} />
      </>
    );
  }

  return <h4>Carregando...</h4>;
};
export default Home;
