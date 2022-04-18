import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import AnimalCard from "./components/animal_card";
import catImages from "./data/cat-image-data";
import dogImages from "./data/dog-image-data";
import Animal from "./data/animal";

function App() {
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);
  const [myTextInputValue, setMyTextInputValue] = useState({
    name: "",
    species: "",
    favFoods: "",
    birthYear: 0,
  });

  const allCatImages = catImages;
  const allDogImages = dogImages;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyTextInputValue({
      ...myTextInputValue,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const catNewData: Animal = {
      name: myTextInputValue.name,
      species: myTextInputValue.species,
      favFoods: myTextInputValue.favFoods.split(",").map((text) => text),
      birthYear: myTextInputValue.birthYear,
      index: cats.length,
      id: uuidv4(),
    };
    catData.push(catNewData);
    setCats(catData);
  };

  return (
    <>
      <Navbar />
      <Header totalCats={cats.length} totalDogs={dogs.length} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <AnimalCard
              animalObject={cat}
              animalImage={allCatImages[index]}
              key={cat.id}
            />
          ))}
          {dogs.map((dog, index) => (
            <AnimalCard
              animalObject={dog}
              animalImage={allDogImages[index]}
              key={dog.id}
            />
          ))}
        </div>

        <form className="mt-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="name"
            value={myTextInputValue.name}
            onChange={onChange}
          />
          <label htmlFor="species">Species</label>
          <input
            type="text"
            className="form-control"
            placeholder="Species"
            id="species"
            value={myTextInputValue.species}
            onChange={onChange}
          />
          <label htmlFor="favFoods">favFoods</label>
          <input
            type="text"
            className="form-control"
            placeholder="favFoods"
            id="favFoods"
            value={myTextInputValue.favFoods}
            onChange={onChange}
          />
          <label htmlFor="birthYear">birthYear</label>
          <input
            type="text"
            className="form-control"
            placeholder="birthYear"
            id="birthYear"
            value={myTextInputValue.birthYear}
            onChange={onChange}
          />
          <button className="btn btn-primary mt-2" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default App;
