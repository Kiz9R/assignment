import { useState, React } from "react";

const App = () => {
  const [name, setName] = useState("Jhon");
  const [age, setAge] = useState(21);
  const [hobby, setHobby] = useState("Reading Books");

  const displayPerson = () => {
    setName("Bob");
    setAge(30);
    setHobby("Playing Chess");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
    </>
  );
};

export default App;
