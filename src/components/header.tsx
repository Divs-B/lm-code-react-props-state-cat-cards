import Cat from '../data/cat'

interface HeaderProps{
  totalCats:number;
  totalDogs:number
}

const Header: React.FC<HeaderProps> = ({totalCats, totalDogs}) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {totalCats} Cats and {totalDogs} Dogs in this App
		</h2>
	</header>
);

export default Header;
