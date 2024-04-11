import Container from '../Container';
import styles from './styles/About.module.scss';
import AboutImage1 from '../../images/about-1.svg?react';
import AboutImage2 from '../../images/about-2.svg?react';
import AboutImage3 from '../../images/about-3.svg?react';

function About() {
	return (
		<Container>
			<section className={styles.about}>
				<article>
					<div>
						<AboutImage1 />
					</div>
					<div>
						<h1>Trabajamos con todos los bancos y mutuarias</h1>
						<p>
							Así te ayudamos a conseguir las mejores condiciones para un
							crédito hipotecario, y que sea fácil y rápido.
						</p>
					</div>
				</article>
				<article>
					<div>
						<h1>Y con las principales inmobiliarias</h1>
						<p>
							Para mostrarte la mejor selección de propiedades en que puedes
							invertir, como departamentos, terrenos, estacionamientos, bodegas
							y otros más.
						</p>
					</div>
					<div>
						<AboutImage2 />
					</div>
				</article>
				<article>
					<div>
						<AboutImage3 />
					</div>
					<div>
						<h1>Hemos ayudado a más de 5.000 personas</h1>
						<p>
							A descubrir su capacidad de inversión, y encontrar la propiedad
							ideal para invertir en ella.
						</p>
					</div>
				</article>
			</section>
		</Container>
	);
}

export default About;
