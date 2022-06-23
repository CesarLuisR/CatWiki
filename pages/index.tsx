import type { NextPage } from "next";
import AppLayout from "components/Layout/AppLayout";
import HomeModule from "modules/Home";

const Home: NextPage = () => {
  return (
    <AppLayout title="Home - CatWiki">
      <HomeModule />
    </AppLayout>
  );
};

export default Home;
