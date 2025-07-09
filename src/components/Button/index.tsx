import * as B from "./styles";

export type Props = {
  text: string;
  buttonFor: "restaurant" | "dish" | "modal" | "formFinish";
  type: "button" | "link" | "submit";
  onClick?: () => void;
};

const Button = ({ text, buttonFor, onClick, type }: Props) => (
  <B.Button buttonFor={buttonFor} onClick={onClick} type={type}>
    {text}
  </B.Button>
);

export default Button;
