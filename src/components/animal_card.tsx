import Animal from "../data/animal";
import AnimalImageForCard from "../components/animal_image_forcard";
import AnimalImage from "../data/animal-image";

interface AnimalCardProps {
  animalObject: Animal;
  animalImage: AnimalImage;
}

const AnimalCard: React.FC<AnimalCardProps> = ({
  animalObject,
  animalImage,
}) => {
  return (
    <div className="card">
      <h3 className="card__text card__header">{animalObject.name}</h3>
      <p className="card__text">{animalObject.species}</p>
      <p className="card__text">{animalObject.favFoods.join()}</p>
      <p className="card__text">{animalObject.birthYear}</p>
      {animalImage && <AnimalImageForCard animalImageObject={animalImage} />}
    </div>
  );
};

export default AnimalCard;
