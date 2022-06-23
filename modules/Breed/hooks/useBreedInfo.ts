import { getBreeds } from "@services/breedServices";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useBreedInfo() {
  const [breedInfo, setBreedInfo] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBreedInfo = async () => {
      const data = await getBreeds();
      const breed = data.find(
        (breed: any) => breed.name.toLowerCase() === router.query.slug
      );
      setBreedInfo(breed);
    };

    fetchBreedInfo();
  }, [router.query.slug]);

  if (!breedInfo) return null;
  if (breedInfo.length === 0) return null;

  return breedInfo;
}
