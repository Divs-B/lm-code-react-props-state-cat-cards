interface CatImage{
    image:string;
    altText:string;
    licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
}

interface CatImageProps{
    catImageObject: CatImage
}

const CatImage: React.FC<CatImageProps> = (props) => (
    <>
    <img className="card__image" src={props.catImageObject.image} alt={props.catImageObject.altText}/>
    <p className="card__text__small">
        Image licenced under <a href={props.catImageObject.licenceUrl}>{props.catImageObject.licenceType}</a>
        {props.catImageObject.attributionName && (
            <>
            &nbsp;by <a href={props.catImageObject.attributionUrl}>{props.catImageObject.attributionName}</a>
            </>
        )}
    </p>
    </>
);

export default CatImage;
