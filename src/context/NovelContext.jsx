import React, {useEffect, createContext, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

// Create the context
const NovelContext = createContext();

// Create a provider component
const NovelProvider = ({ children }) => {
  const [novelTitle, setNovelTitle] = useState("");
  const [novelGenre, setNovelGenre] = useState("추리");
  const [userName, setUserName] = useState();
  const [at, setAt] = useState("");
  const [novelId, setNovelId] = useState("");
  const [chapterId, setChapterId] = useState("");

  const accessToken = useSelector((state) => state.authToken);


  useEffect(() => {

    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.accessToken}`;
        const response = await axios.get('http://localhost:3000/authors/name', {
        });
        console.log(response);
        setAt(accessToken.authenticated);
        return setUserName(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <NovelContext.Provider
      value={{
        novelTitle,
        setNovelTitle,
        novelGenre,
        setNovelGenre,
        userName,
        setUserName,
        at,
        setAt,
        novelId,
        setNovelId,
        chapterId,
        setChapterId
      }}
    >
      {children}
    </NovelContext.Provider>
  );
};

export { NovelContext, NovelProvider };