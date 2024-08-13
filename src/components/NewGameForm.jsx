import { useState } from "react";
import TextInput from "./TextInput";

// eslint-disable-next-line react/prop-types
const NewGameForm = ({ addGame }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });

    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label="Título" value={title} setValue={setTitle} />
      <TextInput id="cover" label="Capa" value={cover} setValue={setCover} />
      <button type="submit">Adicionar a biblioteca</button>
    </form>
  );
};

export default NewGameForm;
