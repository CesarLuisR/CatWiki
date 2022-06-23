import { useState, useEffect } from "react";
import useBreeds from "@modules/Home/hooks/useBreeds";
import randomNumber from "@utils/randomNumber";

export default function useGetRandomsBreeds() {
  const [randomBreeds, setRandomBreeds] = useState<object[]>([]);
  const { breeds } = useBreeds();

  useEffect(() => {
    const data: object[] = [];

    for (let i = 0; i < 4; i++) {
      const number = randomNumber(0, breeds.length - 1);
      if (data.includes(breeds[number])) return;
      data.push(breeds[number]);
    }

    setRandomBreeds(data);
  }, [breeds]);

  return { randomBreeds };
}
