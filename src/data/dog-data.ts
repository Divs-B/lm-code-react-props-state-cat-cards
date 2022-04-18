import Animal from './animal';
import { v4 as uuidv4 } from 'uuid';

const dogData: Array<Animal> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
		index: 0,
		id: ''
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
		index: 1,
		id: ''
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
		index: 2,
		id: ''
	},
];

dogData.forEach(dog => {
	dog.id = uuidv4()
});

export default dogData;
