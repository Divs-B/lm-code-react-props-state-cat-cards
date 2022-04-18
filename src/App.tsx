import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import {useState} from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import {v4 as uuidv4} from 'uuid';
import catData from './data/cat-data';
import Dog from './data/dog';
import dogData from './data/dog-data';
import DogCard from './components/dog_card';

function App() {
	const[cats, setCats] = useState<Array<Cat>>(catData);
	const[dogs, setDogs] = useState<Array<Dog>>(dogData);

console.log("Our pretties ");
     console.info("Our pretties : ----------" , cats);
	 
	return (
		
		<>
			<Navbar />
			<Header totalCats={cats.length} totalDogs={dogs.length}/>

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat, index)=><CatCard catObject={cat} key={cat.id}/>)}
					{dogs.map((dog, index)=><DogCard dogObject={dog} key={dog.id}/>)}
				</div>
				
			</main>
             
			<Footer />
		</>
		
	);
}

export default App;
