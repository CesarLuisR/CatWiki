import StyledLink from "@components/Navigation/Link";
import Image from "next/image";
import { Content, Images, Wrapper } from "./styled";

export default function Why() {
  return (
    <Wrapper>
      <Content>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <StyledLink
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship"
          text="Read more"
        />
      </Content>
      <Images>
        <div className="image-container first">
          <div className="image image-1">
            <Image src="/image 2.png" alt="image 2" layout="fill" />
          </div>
          <div className="image image-2">
            <Image src="/image 1.png" alt="image 1" layout="fill" />
          </div>
        </div>
        <div className="image-container second">
          <div className="image image-3">
            <Image src="/image 3.png" alt="image 3" layout="fill" />
          </div>
        </div>
      </Images>
    </Wrapper>
  );
}
