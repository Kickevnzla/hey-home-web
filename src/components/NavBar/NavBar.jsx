import styles from './styles/NavBar.module.scss';
import Container from '../Container/Container';
import LogoCapitalizarme from '../../images/logo-capitalizarme.svg?react';
import LogoHeyHome from '../../images/logo-hey-home.svg?react';

function NavBar() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<nav className={styles.navbarContainer}>
			<Container>
				<div className={styles.navbar}>
					<LogoCapitalizarme
						onClick={scrollToTop}
						className={styles.logoCapitalizarme}
					/>
					<LogoHeyHome onClick={scrollToTop} className={styles.logoHeyHome} />
				</div>
			</Container>
		</nav>
	);
}

export default NavBar;
