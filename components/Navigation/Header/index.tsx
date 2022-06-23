import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 12px 0;
`;

const Header = () => {
  return (
    <Wrapper href="/">
      <Image src="/CatwikiLogo.svg" alt="Header logo" width={130} height={80} />
    </Wrapper>
  );
};

export default Header;
