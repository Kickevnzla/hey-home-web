import styles from './styles/BecomeAnInvestor.module.scss';
import Button from '../Button';
import Container from '../Container';

function BecomeAnInvestor() {
	return (
		<section className={styles.becomeAnInvestorContainer}>
			<Container>
				<div className={styles.becomeAnInvestor}>
					<h1>
						Conviértete en
						<br />
						inversionista
					</h1>
					<p>
						Empieza tu camino hacia la <strong>libertad financiera.</strong>
					</p>
					<p>
						Construye tu <strong>patrimonio</strong> con activos inmobiliarios,
						que además de valorizarse en el tiempo, generan{' '}
						<strong>ingresos pasivos</strong> todos los meses.
					</p>
					<Button backgroundColor='#fff' textColor='#0069cb'>
						Agenda Online
					</Button>
				</div>
			</Container>
		</section>
	);
}

export default BecomeAnInvestor;
