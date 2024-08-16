import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
} from "react";

interface User {
  id: number;
  name: string;
  description: string;
  images : string[]
}

interface CardContextType {
  selected: any;
  setSelected: Dispatch<SetStateAction<any>>;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export const useCard = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
};

export const CardProvider = ({ children }: CardProviderProps) => {
  const [selected, setSelected] = useState<User[]>([]);

  return (
    <CardContext.Provider value={{ selected, setSelected }}>
      {children}
    </CardContext.Provider>
  );
};
