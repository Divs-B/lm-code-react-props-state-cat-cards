import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import {useState} from 'react';
import Cat from './data/cat';
import CatCard from './components/cat_card';
import {v4 as uuidv4} from 'uuid';
import catData from './data/cat-data'

function App() {
	const[cats, setCats] = useState<Array<Cat>>(catData);

console.log("Our pretties ");
     console.info("Our pretties : ----------" , cats);
	 
	return (
		
		<>
			<Navbar />
			<Header totalCats={cats.length}/>

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat, index)=><CatCard catObject={cat} key={cat.id}/>)}
				</div>
				
			</main>
             
			<Footer />
		</>
		
	);
}

export default App;
