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
import AnimalAddForm from "./components/animal_add_form";

function App() {
  const [cats, setCats] = useState<Array<Animal>>(catData);
  const [dogs, setDogs] = useState<Array<Animal>>(dogData);
  const [textInputValue, setTextInputValue] = useState({
    name: "",
    species: "",
    favFoods: "",
    birthYear: 0,
  });

  const allCatImages = catImages;
  const allDogImages = dogImages;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInputValue({
      ...textInputValue,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const catNewData: Animal = {
      name: textInputValue.name,
      species: textInputValue.species,
      favFoods: textInputValue.favFoods.split(",").map((text) => text),
      birthYear: textInputValue.birthYear,
      index: cats.length,
      id: uuidv4(),
    };
    setCats([...catData, catNewData]);
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
          <AnimalAddForm
            textInputValue={textInputValue}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
