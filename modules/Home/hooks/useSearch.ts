import { useState, useEffect } from "react";
import { getBreedsByName } from "@services/breedServices";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const breeds = await getBreedsByName(search);
      if (breeds.length > 10) breeds.length = 10;
      setBreeds(breeds);
    };

    fetchBreeds();
  }, [search]);

  return { search, breeds, setSearch };
};

export default useSearch;
