import { getImages } from "@services/breedServices";
import { useEffect, useState } from "react";
import useBreedInfo from "./useBreedInfo";

export default function useBreedImages() {
  const [images, setImages] = useState([]);
  const breedInfo = useBreedInfo();

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImages(breedInfo?.id);
      setImages(data);
    };

    fetchImages();
  }, [breedInfo]);

  return images;
}
