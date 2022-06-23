import About from "./sections/About";
import MostSearchedBreeds from "./sections/MostSearched";
import Why from "./sections/Why";
import Provider from "./context/Provider";

const Home = () => {
  return (
    <Provider>
      <About />
      <MostSearchedBreeds />
      <Why />
    </Provider>
  );
};

export default Home;
