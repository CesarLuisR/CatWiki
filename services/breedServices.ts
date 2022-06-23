import apiRoutes from "@config/apiRoutes";

export const getBreeds = async () => {
  const response = await fetch(apiRoutes.get.breeds);
  const data = await response.json();
  return data;
};

export const getBreedsByName = async (name: string) => {
  const response = await fetch(apiRoutes.get.breedsByName(name));
  const data = await response.json();
  return data;
};

export async function getImages(id: string) {
  const response = await fetch(apiRoutes.get.images(id));
  const data = await response.json();
  return data;
}