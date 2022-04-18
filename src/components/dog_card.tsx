import Dog from '../data/dog'
import DogImage from '../components/dog_image';
import dogImages from '../data/dog-image-data';

interface DogCardProps{
  dogObject:Dog
}

const images = dogImages;

const DogCard: React.FC<DogCardProps> = ({dogObject}) => {
  return(
    <div className="card">
        <h3 className="card__text card__header">{dogObject.name}</h3>        
        <p className="card__text">{dogObject.species}</p>
        <p className="card__text">{dogObject.favFoods}</p>
        <p className="card__text">{dogObject.birthYear}</p>
        {dogObject.dogIndex < images.length && (<DogImage dogImageObject={images[dogObject.dogIndex]}/>)}
    </div>
  )
}


export default DogCard;
