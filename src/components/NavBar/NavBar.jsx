import styles from './styles/NavBar.module.scss';
import Container from '../Container/Container';
import LogoCapitalizarme from '../../images/logo-capitalizarme.svg?react';
import LogoHeyHome from '../../images/logo-hey-home.svg?react';

function NavBar() {
	return (
		<nav className={styles.navbarContainer}>
			<Container>
				<div className={styles.navbar}>
					<LogoCapitalizarme className={styles.logoCapitalizarme} />
					<LogoHeyHome className={styles.logoHeyHome} />
				</div>
			</Container>
		</nav>
	);
}

export default NavBar;
