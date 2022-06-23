import Link from "next/link";
import styled from "styled-components";

export default function StyledLink({ href, text }: Props) {
  return (
    <Link href={href}>
      <Container>
        {text} &nbsp;
        <span className="material-symbols-outlined">trending_flat</span>
      </Container>
    </Link>
  );
}

const Container = styled.a`
  display: flex;
  width: max-content;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: rgba(41, 21, 7, 0.6);
  text-decoration: none;
  line-height: 22px;
  margin-top: 10px;
  cursor: pointer;
`;

type Props = {
  href: string;
  text: string;
};
