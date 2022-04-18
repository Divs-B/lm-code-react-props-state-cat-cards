import Animal from './animal';
import { v4 as uuidv4 } from 'uuid';

const catData: Array<Animal> = [
    {
        name: 'Little Miss Purrfect',
        species: 'Cat',
        favFoods: ['wet food', 'dry food'],
        birthYear: 2016,
        index: 0,
        id: ''
    },
    {
        name: 'Mr Gwumpy',
        species: 'Cat',
        favFoods: ['caviar'],
        birthYear: 2016,
        index: 1,
        id: ''
    },
    {
        name: 'Dopey',
        species: 'Cat',
        favFoods: ['bugs'],
        birthYear: 2018,
        index: 2,
        id: ''
    },
    {
        name: 'Jumpy',
        species: 'Scaredy Cat',
        favFoods: ['not cucumbers!'],
        birthYear: 2008,
        index: 3,
        id: ''
    },
    {
        name: 'Meowsalot',
        species: 'Cat',
        favFoods: ['tuna', 'catnip', 'celery'],
        birthYear: 2012,
        index: 4,
        id: ''
    },
    {
        name: 'Cindy Clawford',
        species: 'Cat',
        favFoods: ['mice'],
        birthYear: 2012,
        index: 5,
        id: ''
    },
    {
        name: 'Katy Purry',
        species: 'Cat',
        favFoods: ['cigarettes', 'coffee'],
        birthYear: 2015,
        index: 6,
        id: ''
    },
    {
        name: 'Dr. Von Belly-Rub',
        species: 'Cat',
        favFoods: ['salt'],
        birthYear: 2020,
        index: 7,
        id: ''
    },
    {
        name: 'Blobby',
        species: 'Bird?',
        favFoods: ['your soul'],
        birthYear: 2020,
        index: 8,
        id: ''
    },
    {
        name: 'El Taco',
        species: 'Cat',
        favFoods: ['tequila', 'bar snax'],
        birthYear: 1995,
        index: 9,
        id: ''
    },
    {
        name: 'Nibbles',
        species: 'Hungry Cat',
        favFoods: ['blankets', 'feet', 'tinsel'],
        birthYear: 2003,
        index: 10,
        id: ''
    },
    {
        name: 'BoopySnoot',
        species: 'Tiny Cat',
        favFoods: ['milk'],
        birthYear: 2021,
        index: 11,
        id: ''
    },
    {
        name: "Captain Catface",
        species: "Sea Cattain",
        favFoods: ["fish, rum"],
        birthYear: 2016,
        index: 12,
        id: ''
    }
];
catData.forEach(cat => {
    cat.id = uuidv4()
});


export default catData;
