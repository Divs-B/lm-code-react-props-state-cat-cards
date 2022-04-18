import DogImage from '../data/dog-image'

interface DogImageProps{
    dogImageObject: DogImage
}

const DogImages: React.FC<DogImageProps> = ({dogImageObject}) => (
    <>
    <img className="card__image" src={dogImageObject.image} alt={dogImageObject.altText}/>
    <p className="card__text__small">
        Image licenced under <a href={dogImageObject.licenceUrl}>{dogImageObject.licenceType}</a>
        {dogImageObject.attributionName && (
            <>
            &nbsp;by <a href={dogImageObject.attributionUrl}>{dogImageObject.attributionName}</a>
            </>
        )}
    </p>
    </>
);

export default DogImages;
