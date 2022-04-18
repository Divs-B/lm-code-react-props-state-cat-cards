import Dog from './dog';
import { v4 as uuidv4 } from 'uuid';

const dogData: Array<Dog> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
		dogIndex: 0,
		id: ''
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
		dogIndex: 1,
		id: ''
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
		dogIndex: 2,
		id: ''
	},
];

dogData.forEach(dog => {
	dog.id = uuidv4()
});

export default dogData;
