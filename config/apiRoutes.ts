const API = "https://api.thecatapi.com/v1";

const apiRoutes = {
  get: {
    breeds: `${API}/breeds`,
    breedsByName: (name: string) => `${API}/breeds/search?q=${name}`,
    images: (id: string) => `${API}/images/search?breed_ids=${id}&limit=8`,
  },
};

export default apiRoutes;
