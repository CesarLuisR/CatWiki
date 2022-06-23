import { NextPage } from "next";
import AppLayout from "@components/Layout/AppLayout";
import Breed from "@modules/Breed";

const BreedPage: NextPage = () => {
  return (
    <AppLayout title="CatWiki - Breed">
      <Breed />
    </AppLayout>
  );
};

export default BreedPage;
