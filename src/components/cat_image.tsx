import CatImage from '../data/cat-image'

interface CatImageProps{
    catImageObject: CatImage
}

const CatImages: React.FC<CatImageProps> = ({catImageObject}) => (
    <>
    <img className="card__image" src={catImageObject.image} alt={catImageObject.altText}/>
    <p className="card__text__small">
        Image licenced under <a href={catImageObject.licenceUrl}>{catImageObject.licenceType}</a>
        {catImageObject.attributionName && (
            <>
            &nbsp;by <a href={catImageObject.attributionUrl}>{catImageObject.attributionName}</a>
            </>
        )}
    </p>
    </>
);

export default CatImages;
