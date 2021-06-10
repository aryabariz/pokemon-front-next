import styled from "@emotion/styled";

interface CardProps {
  backgroundColor?: string;
}

const Card = styled.div(
  {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
  (props: CardProps) => ({ background: props.backgroundColor })
);

Card.defaultProps = {
  backgroundColor: "white",
};
export default Card;
