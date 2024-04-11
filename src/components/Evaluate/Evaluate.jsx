import Button from '../Button';
import Container from '../Container';
import styles from './styles/Evaluate.module.scss';
import Evaluate1 from '../../images/evaluate-1.svg?react';
import Evaluate2 from '../../images/evaluate-2.svg?react';
import Evaluate3 from '../../images/evaluate-3.svg?react';
import Evaluate4 from '../../images/evaluate-4.svg?react';

function Evaluate() {
	return (
		<section className={styles.evaluateContainer}>
			<Container>
				<div className={styles.evaluate}>
					<h1>
						Invertir es simple con
						<br />
						Capitalizarme.com
					</h1>
					<p>
						Sigue estos 4 pasos <strong>100% online</strong>
					</p>
					<div>
						<article>
							<div>
								<Evaluate1 />
							</div>
							<h2>1. Evalúate en nuestro simulador</h2>
						</article>
						<article>
							<div>
								<Evaluate2 />
							</div>
							<h2>2. Conoce tus opciones</h2>
						</article>
						<article>
							<div>
								<Evaluate3 />
							</div>
							<h2>3. Elige las que te interesan</h2>
						</article>
						<article>
							<div>
								<Evaluate4 />
							</div>
							<h2>4. Recibe la información</h2>
						</article>
					</div>
					<Button backgroundColor='#0069cb' textColor='#fff'>
						Evalúate hoy
					</Button>
				</div>
			</Container>
		</section>
	);
}

export default Evaluate;
