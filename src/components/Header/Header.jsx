import './Header.css';

function Header() {

	return  (
		<div className='header'>
			<a href="#" className='header__favorites'>
				<img src="/public/favorites.svg" alt=""/>
			</a>
			<div className='header__nav'>
				<a href="#" className='header__nav-item'>Поиск фильмов</a>
				<a href="#" className='header__nav-item'>
					<span>Мои фильмы</span>
					<span className='ellipse'>2</span>
				</a>
				<a href="#" className='header__nav-item'>
					<span>Войти</span>
					<img src="/public/login.svg" alt="" />
				</a>
			</div>
		</div>
	);
}

export default Header;
