import { Rate, Wrapper } from "./styled";

const RateBar = ({ rate }: { rate: number }) => {
  return (
    <Rate rate={rate}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </Rate>
  );
};

export default function BreedChar({ name, content, rate }: Props) {
  return (
    <Wrapper rate={rate}>
      <b className="name">{name}: </b>
      {rate ? <RateBar rate={rate} /> : <span>&nbsp;{content}</span>}
    </Wrapper>
  );
}

type Props = {
  name: string;
  content?: string;
  rate?: number;
};
