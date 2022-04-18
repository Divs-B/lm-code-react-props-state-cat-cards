import Cat from '../data/cat'
import CatImage from '../components/cat_image'
import catImages from '../data/cat-image-data';

interface CatCardProps {
    catObject:Cat
}

const images = catImages;


const CatCard: React.FC<CatCardProps> = ({catObject}) => {
	
    return (
    <div className="card">
        <h3 className="card__text card__header">{catObject.name}</h3>        
        <p className="card__text">{catObject.species}</p>
        <p className="card__text">{catObject.favFoods.join( )}</p>
        <p className="card__text">{catObject.birthYear}</p>
        {catObject.catIndex < images.length && (<CatImage catImageObject={images[catObject.catIndex]}/>)}
    </div>
    )
}

export default CatCard;
