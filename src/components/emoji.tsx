interface Props {
  simbolo: string;
}

function Emoji({ simbolo }: Props) {
  return <p>{simbolo}</p>;
}

export default Emoji;