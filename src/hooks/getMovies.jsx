import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const getMovies = async () => {
  try {
    const MovieData = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=83eab7bc3ad79bad34496c8ab25b97fe`
    );
    return MovieData.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getMovies;
