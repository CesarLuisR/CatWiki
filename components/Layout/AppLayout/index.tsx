import Footer from "components/Navigation/Footer";
import Header from "components/Navigation/Header";
import Head from "next/head";
import { LayoutContainer } from "./styled";

const AppLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
};

type Props = {
  title: string;
  children: React.ReactNode;
};

export default AppLayout;
