import Container from '../Container/Container';
import styles from './styles/FooterStyled.module.scss';

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<Container>
				<div className={styles.footer}>
					<div className={styles.content}>
						<span>Sígueme en mis redes.</span>
						<div className={styles.socialMedia}></div>
						<span>
							Diseño y desarrollo por{' '}
							<span className={styles.nombre}>Jesús Paredes.</span>
						</span>
					</div>
					<div className={styles.content}>
						<span>
							Actualmente en: <span>Santiago de Chile.</span>
						</span>
						<span>&copy;2024 Todos Los Derechos Reservados.</span>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
