import { useCard } from "../../context/cardContext";
import "./Card.css"

interface User {
  id: number;
  name: string;
  description: string;
  images : string[];
}

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const { selected } = useCard();
  return (
    <div className="card_container" style={{ backgroundColor : selected.id === user.id ? "rgb(233,233,233)" : "white"}}>
      <h3>{user.name}</h3>
      <p className="elipses">{user.description}</p>
    </div>
  );
};

export default Card;
