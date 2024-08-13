import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <>
      <div>
        <h1>Biblioteca de Jogos</h1>
        <NewGameForm addGame={addGame} />
        {/* ao trabalhar com renderização de listas que o próprio usuário adiciona, é interessante criar essa condicional */}
        <div className="games">
          {games.length > 0 ? (
            games.map((game) => {
              <Game key={game.id} title={game.title} cover={game.cover} onRemove={() => removeGame(game.id)} />;
            })
          ) : (
            <h2>Ainda não há jogos adicionados</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
