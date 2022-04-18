import AnimalImage from "../data/animal-image";

interface AnimalImageProps {
  animalImageObject: AnimalImage;
}

const AnimalImageForCard: React.FC<AnimalImageProps> = ({
  animalImageObject,
}) => (
  <>
    <img
      className="card__image"
      src={animalImageObject.image}
      alt={animalImageObject.altText}
    />
    <p className="card__text__small">
      Image licenced under{" "}
      <a href={animalImageObject.licenceUrl}>{animalImageObject.licenceType}</a>
      {animalImageObject.attributionName && (
        <>
          &nbsp;by{" "}
          <a href={animalImageObject.attributionUrl}>
            {animalImageObject.attributionName}
          </a>
        </>
      )}
    </p>
  </>
);

export default AnimalImageForCard;
