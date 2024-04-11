import styles from './styles/FooterStyled.module.scss';
import Container from '../Container/Container';
import Location from '../../images/location.svg?react';

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<Container>
				<div className={styles.footer}>
					<div>
						<p>
							Todas las rentabilidades y retornos mostrados en la página son
							referenciales, los rendimientos pasados no garantizan retornos
							futuros.
						</p>
						<p>
							&copy; Capitalizarme 2024 •{' '}
							<a
								href='https://s3-cms-produccion.s3.us-west-2.amazonaws.com/assets/docs/Terminos_y_Condiciones_Capitalizarme.docx.pdf'
								rel='noopener noreferrer'
								aria-label='Link a las condiciones de uso'
								target='_blank'
							>
								Condiciones de uso
							</a>{' '}
							•{' '}
							<a
								href='https://s3-cms-produccion.s3.us-west-2.amazonaws.com/assets/docs/Politicas_De_Privacidad_Capitalizarme.docx.pdf'
								rel='noopener noreferrer'
								aria-label='Link a las políticas de privacidad'
								target='_blank'
							>
								Políticas de privacidad
							</a>
						</p>
					</div>
					<div>
						<p>
							<Location />
							Av. Apoquindo 5583, Piso 4, Las Condes.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
