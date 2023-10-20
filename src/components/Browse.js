import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainConntainer from "./MainConntainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainConntainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
