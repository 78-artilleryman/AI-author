import { createContext, useState } from "react";

// Create the context
const NovelContext = createContext();

// Create a provider component
const NovelProvider = ({ children }) => {
  const [novelTitle, setNovelTitle] = useState("");
  const [novelGenre, setNovelGenre] = useState("");

  return (
    <NovelContext.Provider
      value={{
        novelTitle,
        setNovelTitle,
        novelGenre,
        setNovelGenre,
      }}
    >
      {children}
    </NovelContext.Provider>
  );
};

export { NovelContext, NovelProvider };