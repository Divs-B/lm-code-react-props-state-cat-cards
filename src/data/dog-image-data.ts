import DogImage from "./cat-image"
import dog1 from '../assets/images/dog1.jpg';
import dog2 from '../assets/images/dog2.jpg';
import dog3 from '../assets/images/dog3.jpg';

const dogImages: Array<DogImage> = [
    {
        image: dog1,
        altText: 'Describe this cat!',
        licenceType: 'CC BY-SA 2.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        attributionName: 'amblin',
        attributionUrl: 'https://www.flickr.com/people/amblin/'
    },
    {
        image: dog2,
        altText: 'Describe this cat!',
        licenceType: 'CC BY-SA 2.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        attributionName: 'ivva',
        attributionUrl: 'https://www.flickr.com/people/ivva/'
    },
    {
        image: dog3,
        altText: 'Describe this cat!',
        licenceType: 'CC BY-ND 2.0',
        licenceUrl: 'https://creativecommons.org/licenses/by-nd/2.0/',
        attributionName: 'Rachele Pettarelli Ph',
        attributionUrl: 'https://www.flickr.com/people/rachephotos/'
    }
];

export default dogImages;
