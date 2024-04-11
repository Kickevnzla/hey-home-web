import styles from './styles/Hero.module.scss';
import Container from '../Container';
import HeroImage from '../../images/averigua-tu-capacidad-de-inversion-capitalizarme.svg?react';
import Button from '../Button';

function Hero() {
	return (
		<section className={styles.heroContainer}>
			<Container>
				<div className={styles.hero}>
					<div>
						<h1>Descubre tu capacidad de inversión</h1>
						<p>
							Descubre hasta <strong>qué monto</strong> puedes invertir acorde a
							tu situación financiera y para <strong>qué propiedades</strong> te
							alcanza.
						</p>
						<p>
							Evalúate en línea, sin compromisos, con un ejecutivo. Podrás
							estimar el crédito hipotecario que puedes conseguir, y saber si
							puedes invertir en departamentos u otros activos inmobiliarios.
						</p>
						<Button backgroundColor='#0069cb' textColor='#fff'>
							Quiero evaluarme
						</Button>
					</div>
					<div>
						<HeroImage className={styles.heroImage} />
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Hero;
