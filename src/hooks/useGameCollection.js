import { useState } from "react";

const useGameCollection = () => {
  const [games, setGames] = useState(() => {
    const getLocalStorage = localStorage.getItem("new-game");
    if (!getLocalStorage) {
      return [];
    } else {
      return JSON.parse(getLocalStorage);
    }
  });

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 100000);
    const game = { id, title, cover };
    /* EXPLICAÇAO DO CÓDIGO ABAIXO: 
    estou pegando o estado atual através de um callback
    quando coloco esse callback em um rest params significa que estou pegando todos os valores que estão em currentState
    o que vem após a vírgula e o próximo item que se quer adicionar
    assim estamos criando uma lista com todos os valores passados para o state */
    setGames((previousState) => {
      const newState = [...previousState, game];
      localStorage.setItem("new-game", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((previousState) => {
      const newState = previousState.filter((game) => game.id !== id);
      localStorage.setItem("new-game", JSON.stringify(newState));
      return newState;
    });
  };

  return { games, addGame, removeGame };
};

export default useGameCollection;
