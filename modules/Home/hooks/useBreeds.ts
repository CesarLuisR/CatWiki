import { getBreeds } from "@services/breedServices";
import { useEffect, useState } from "react";

const useBreeds = () => {
  const [breeds, setBreeds] = useState<object[]>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const data = await getBreeds();
      setBreeds(data);
    };

    fetchBreeds();
  }, []);

  return { breeds };
};

export default useBreeds;
