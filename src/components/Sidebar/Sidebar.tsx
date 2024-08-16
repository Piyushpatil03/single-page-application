import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import Card from "../Card/Card";
import { useCard } from "../../context/cardContext";

interface User {
  id: number;
  name: string;
  description: string;
  images : string[]
}

const Sidebar = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { selected, setSelected } = useCard();

  const getData = async () => {
    const response = await fetch("/users.json");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sidebar">
      {users &&
        users.map((user) => (
          <div key={user.id} className="user_container" onClick={() => setSelected(user)}>
            <Card user={user} />
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
